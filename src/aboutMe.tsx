import * as React from 'react';
import './AboutMe.css';
import { aboutme, content,footerShared } from './AboutMe.css';

export interface IProps {
	content: string;
	img: string;
	textUppercase: string;
}
export const AboutMeComponent = (props: IProps) => {
	return (
		<aside className={`${aboutme} widget about-me-widget  text-center`}>
			<div className={content}>
				<div>
					<img src={props.img} alt="" className="img-me img-circle" />
					<h2 className="text-uppercase">{props.textUppercase}</h2>
					<p>{props.content}</p>
				</div>
			</div>
			<div className={footerShared}>
				<ul className="list-inline">
					<li><a className="s-facebook" href=""><i className="fa fa-facebook"></i></a></li>
					<li><a className="s-twitter" href=""><i className="fa fa-twitter"></i></a></li>
					<li><a className="s-google-plus" href=""><i className="fa fa-google-plus"></i></a></li>
					<li><a className="s-linkedin" href=""><i className="fa fa-linkedin"></i></a></li>
					<li><a className="s-instagram" href=""><i className="fa fa-instagram"></i></a></li>
				</ul>
			</div>
		</aside>
	);
}