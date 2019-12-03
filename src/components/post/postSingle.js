import React from 'react'
import './postSingle.css'

class PostSingle extends React.Component {
    render() {
        return (
            <div className="single-post-details-area">
                <div className="post-thumbnail mb-30">
                    <img src="../../assets/images/crypto-news-5-600x450.jpg" alt=""/>
                </div>
                <div className="post-content">
                    <p className="post-date">MAY 8, 2018 / foody</p>
                    <h4 className="post-title">A Closer Look At Our Front Porch Items From Lowe’s</h4>
                    <div className="post-meta">
                        <a href="#"><span>by</span> Sarah Jenks</a>
                        <a href="#"><i className="fa fa-eye"></i> 192</a>
                        <a href="#"><i className="fa fa-comments"></i> 08</a>
                    </div>
                    <p>Ten years ago, laborers hammering away at Prague’s cobblestone streets would probably break for
                        lunch with bag of fluffy rohliky bread rolls and some sliced ham, if they couldn’t make it to a
                        pub for goulash and dumplings. Flash-forward to 2018 and the same stonemasons — as well as local
                        shopkeepers, students and chief executives — are likely to prefer bun bo nam bo or pho soup for
                        lunch at one of the city’s fast and cheap Vietnamese noodle restaurants, which have appeared by
                        the dozens in the Czech capital over the past decade.</p>
                    <p>What hadn’t shown up, however, was the idea that Vietnamese cuisine can be taken seriously, with
                        complex techniques and in a fancier setting. That changed with last December’s opening of Taro,
                        a surprisingly chic bistro in the forever up-and-coming Smichov neighborhood southwest of Old
                        Town. Run by two brothers, Khanh and Giang Ta, Taro has no evening à la carte menu (there is one
                        at lunch), instead offering just two options for dinner: a four-course tasting menu at 890
                        koruna (about $40) or a seven-course menu at 1,290 koruna per person, not including drinks.
                        Cheap noodles this ain’t.</p>
                    <blockquote>
                        <div className="blockquote-icon">
                            <img src="../../assets/images/crypto-news-5-600x450.jpg" alt=""/>
                        </div>
                        <div className="blockquote-text">
                            <h6>That’s not to say you’ll have the exact same thing if you stop by: the restaurant’s
                                menus change constantly, based on seasonal ingredients.</h6>
                            <h6>Ollie Schneider</h6>
                        </div>
                    </blockquote>
                    <h4>You have 4 free articles remaining.</h4>
                    <p>A deconstructed gyoza started things off on my visit, topping a crisp won ton cracker with sweet
                        and spicy candied ginger, a tender bite of smoky Peking duck and an aromatic cucumber gel for a
                        crunchy and fragrant amuse bouche. Seven equally creative courses followed, often balancing
                        sweet notes with bracing acidity.</p>
                    <p>A sweet-and-sour sea bass tartare, decorated with apple chips, mango chunks and creamy avocado
                        purée, tasted more like a ceviche, while a green mango salad bathed in crisp passion fruit
                        dressing contrasted tropical fruit flavors with juicy chunks of slow-cooked beef tenderloin.</p>
                </div>
            </div>
        )
    }
}

class PostSingle2 extends React.Component {
    render() {
        return (
            <div className="post-single">
                <div className="card-header font-weight-bold">
                    <span>About author</span>
                </div>
                <div className="card-body">
                    <div className="media d-block d-md-flex mt-3">
                        <img className="d-flex mb-3 mx-auto z-depth-1"
                             src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg"
                             alt="Generic placeholder"/>
                        <div className="media-body text-center text-md-left ml-md-3 ml-0">
                            <h5 className="mt-0 font-weight-bold">Caroline Horwitz</h5>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti
                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                            similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                            fuga.
                        </div>
                    </div>
                </div>
                <div className="text-center btn-box">
                    <a className="btn btn-success " href="#">Comment</a>
                    <a className="btn btn-primary" href="#">Edit</a>
                    <a className="btn btn-danger" href="#">Delete</a>
                </div>
            </div>
        )
    }
}

export default PostSingle2