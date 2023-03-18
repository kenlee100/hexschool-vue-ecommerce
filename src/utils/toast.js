import Swal from "sweetalert2";

export default Swal.mixin({
  toast: true,
  showConfirmButton: false,
  timer: 1500,
  position: "top-end",
  showClass: {
    popup: "animate__animated animate__slideInRight",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutRightBig",
  },
});
