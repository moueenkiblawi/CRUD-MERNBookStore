import Lottie from 'lottie-react'
import spin from '../../public/spinner.json'
function spinner() {
  return (
    <div>
         <Lottie className="contact-animation"
                style={{ height: "100%" ,width:"25rem"}}
               animationData={spin}
              />
    </div>
  )
}

export default spinner