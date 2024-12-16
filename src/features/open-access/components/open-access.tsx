import { useState } from "preact/hooks";

import { OpenAccessStyled } from "@features/open-access/styled-components/open-access.styled.ts";
import {
  OpenAccessInputContainerStyled
} from "@features/open-access/styled-components/open-access-input-container.styled.ts";
import { OpenAccessInputErrorStyled } from "@features/open-access/styled-components/open-access-input-error.styled.ts";

import ErrorIcon from "@vectors/input-error.svg?react";
import { OpenAccessInputStyled } from "@features/open-access/styled-components/open-access-input.styled.ts";
import { useAppContext } from "@entities/app/contexts/app-context.tsx";
import { ModalNameEnum } from "@entities/modal/enums/modal-name.enum.ts";
import { OpenAccessButtonStyled } from "@features/open-access/styled-components/open-access-button.styled.ts";

export const OpenAccess = () => {
  const { setModal } = useAppContext();
  const [password, setPassword] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== '12345678!') {
      setIsError(true);
    } else {
      setIsError(false);
      setModal(ModalNameEnum.ANALYSIS);
    }
  }

  return (
    <OpenAccessStyled onSubmit={onSubmit}>
      <OpenAccessInputContainerStyled>
        <OpenAccessInputStyled type={'text'}
                               onChange={(e) => setPassword(e.target.value)}
                               placeholder={'Пароль'}
                               _hasError={isError}
        />
        {isError && <OpenAccessInputErrorStyled>
          <ErrorIcon/>
          <div>Неверный пароль</div>
        </OpenAccessInputErrorStyled>}
      </OpenAccessInputContainerStyled>

      <OpenAccessButtonStyled type={'button'} disabled={password === ''} onClick={onSubmit}>
        Войти
      </OpenAccessButtonStyled>
    </OpenAccessStyled>
  );
};
