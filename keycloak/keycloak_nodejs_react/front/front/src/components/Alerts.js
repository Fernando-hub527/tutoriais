import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export function successfulOperation(msg) {
  const MySwal = withReactContent(Swal)
  MySwal.fire({
    position: 'center',
    icon: 'success',
    title: msg,
    showConfirmButton: false,
    timer: 1500
  })
}

export function requestError(title, text) {
  title = title || 'Ops, um erro ocorreu durante o carregamento dos dados'
  text = text || 'Verifique sua conexão ou tente novamente mais tarde'

  const MySwal = withReactContent(Swal)
  MySwal.fire({
    position: 'center',
    icon: 'error',
    title: title,
    text: text,
    showConfirmButton: false,
    timer: 3500
  })
}