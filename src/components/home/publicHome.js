import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class PublicHome extends React.Component {
    render() {
        return (
            <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} dynamicHeight={true}>
                <div>
                    <h2 className="text-center text-white"><a href="/login">Login</a> to see newest posts</h2>
                    <img src="assets/images/courasel1.jpg">
                    </img>
                </div>
                <div>
                    <h2 className="text-center text-white"><a href="/login">Login</a> to see newest posts</h2>
                    <img src="assets/images/courasel2.jpg" />
                </div>
                <div>
                    <h2 className="text-center text-white"><a href="/login">Login</a> to see newest posts</h2>
                    <img src="assets/images/courasel3.jpg" />
                </div>
                <div>
                    <h2 className="text-center text-white"><a href="/login">Login</a> to see newest posts</h2>
                    <img src="assets/images/courasel4.jpg" />
                </div>
            </Carousel>
        );
    }
}