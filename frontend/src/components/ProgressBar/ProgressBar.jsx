import React,{useState} from 'react'
import './ProgressBar.css'

const ProgressBar = ({done}) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
		const newStyle = {
				opacity: 1,
				width: `${done}%`
		}
		setStyle(newStyle);
	}, 1000);
	return (
		<div class="progress">
  		<div class="progress-done" style={style}>
				{done}%
  		</div>
		</div>
	)
};


export default ProgressBar