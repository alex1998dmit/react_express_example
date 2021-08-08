import Cloud from "../Cloud"

const Clouds = () => {
  return (
    <div>
      <Cloud x={25} y={5} url='/cloud1.svg' />
      <Cloud x={-5} y={70} url='/cloud2.svg' />
      <Cloud x={70} y={30} url='/cloud3.svg' />
      <Cloud x={80} y={35} url='/cloud4.svg' />
      <Cloud x={85} y={20} url='/cloud5.svg' />
      <Cloud x={90} y={80} url='/cloud6.svg' />
    </div>
  )
}

export default Clouds
