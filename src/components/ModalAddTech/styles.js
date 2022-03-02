import { styled } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';

export const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    margin-top: 10px;
  }


  form > div {
    width: 100%;
  }

    .botoes button {
    width: 100%;
  }
 
`

export const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  filter: blur(0.9);
  -webkit-tap-highlight-color: transparent;
`;

export const styleBox = {
  width: 369,
  bgcolor: '#212529',
  p: 2,
  px: 4,
  pb: 3,
};
