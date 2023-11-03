import React from 'react';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const LeagueFilter = props => {
    const data = props.data;
    return (
        <section className="tf-section top-seller-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sc-heading style-2">
                            <div className="content-left">
                                <div className="inner">
                                    {/* <h4>Today</h4> */}
                                    {/* <p className="desc">"Most popular Metatown nft market place"</p> */}
                                </div>
                            </div>
                            {/* <div className="content-right">
                                <Link to="/explore-01" className="sc-button style letter style-2"><span>Explore More</span> </Link>
                            </div> */}
                        </div>
                    </div>
                    {
                        data.slice(0,15).map((item,index) => (
                            <Card className='mt-3'>
                                <Card.Body className='d-flex align-items-center justify-content-between flex-row'>
                                <Card.Title><img src={item.img} alt="futb" width={80}/></Card.Title>
                                <Card.Subtitle className="text-muted">VS</Card.Subtitle>
                                <Card.Text className='m-0'>
                                    <span>{item.name}</span>
                                </Card.Text>
                                <Button variant="ligth">{item.playTime}</Button>
                                {/* <Card.Link href="#" variant="secondary">{item.price}</Card.Link> */}
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default LeagueFilter;
