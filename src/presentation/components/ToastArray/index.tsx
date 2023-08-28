import React from 'react';

import { ToastEnum } from '~types/index';

import { Message } from './Message';
import { Container } from './styles';

interface ToastArrayProps {
  messages: Array<{
    id: number;
    message: string;
    type: ToastEnum;
  }>;
  onHide: (message: string) => void;
}

export function ToastArray({ messages, onHide }: ToastArrayProps) {
  return (
    <Container>
      {messages?.map(({ id, message, type }) => (
        <Message key={id} message={message} typeToast={type} onHide={() => onHide(message)} />
      ))}
    </Container>
  );
}
