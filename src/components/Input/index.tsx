import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isField, setIsFieds] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleINputFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocus(false);

    setIsFieds(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isField={isField} isFocus={isFocus}>
      {Icon && <Icon size={18} />}
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
        onFocus={handleINputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  );
};

export default Input;
