import React from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components';
import media from "styled-media-query";

const AllHepsi = styled.section`
#root {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: #f0f0f0;
  }
  
  .card {
    width: 45ch;
    height: 45ch;
    background: grey;
    border-radius: 5px;
    background-image: url(https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40);
    background-size: cover;
    background-position: center center;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s;
    will-change: transform;
    border: 15px solid white;
    ${media.lessThan("medium")`
    width: 23ch;
    height: 23ch;
  `}
  }
  
  .card:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
  
`

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export function ForHome() {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <AllHepsi>
            <animated.div
                className="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            />
        </AllHepsi>
    )
}


export default ForHome;
