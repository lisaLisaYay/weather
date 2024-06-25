import { BsCloudSnowFill } from "react-icons/bs";
import { BsCloudFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import { MdThunderstorm } from "react-icons/md";
import { BsCloudDrizzle } from "react-icons/bs";
import { IoRainySharp } from "react-icons/io5";
import { FaWind } from "react-icons/fa";
import { TbMist } from "react-icons/tb";

export const weatherType ={
    Thunderstorm:{
        icon:<MdThunderstorm />,
        message:"It could get noisy",
        backgroundcolor:"#000000"
    },
    Drizzle:{
        icon:<BsCloudDrizzle />,
        message:"It might rain a little",
        backgroundcolor:"#36454f"
    },
    Rain:{
        icon:<IoRainySharp />,
        message:"You'd need an umbrella",
        backgroundcolor:"#0000ff"
    },
    Snow:{
        icon:<BsCloudSnowFill />,
        message:"Lets build a snowman",
        backgroundcolor:"#7f6065"
    },
    Clear:{
        icon:<MdSunny />,
        message:"It is perfect t-shirt weather",
        backgroundcolor:"#e47200"
    },
    Clouds:{
        icon:<BsCloudFill />,
        message:"You could live in the clouds",
        backgroundcolor:"#363636"
    },
    Haze:{
        icon:<FaWind />,
        message:"It might be a get-down",
        backgroundcolor:"#58586e"
    },
    Mist:{
        icon:<TbMist />,
        message:"It might be hard to see",
        backgroundcolor:"#3e3e37"
    }
}