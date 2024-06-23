import React from 'react';
import { Card, CardBody, CardTitle, Col, Container, Row } from 'react-bootstrap';
import styles from './basicpage.module.css';
import { FaCheckCircle, FaSync, FaTimesCircle } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faCircle,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Basicpage3() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };
    return (
        <div className={styles.contentdiv}>
            <Container>
                <Row>
                    <Col xs={12} md={4} style={{ maxHeight: '200px', display: 'flex', flexDirection: 'column' }}>

                        <Card style={{ flex: 1 }}>

                            <Card.Body style={{ overflowY: 'auto' }}>
                                <div className='mb-4 d-flex justify-content-end align-items-center'>

                                    <button className={`btn btn-lg ${styles.specail}`} onClick={handleClick}> Back To Home  </button></div>
                                <h3 className='fs-4 fw-bold text-secondary'>Given Information</h3>
                                <hr />
                                <h5>Your Search</h5>
                                <span className='text-secondary text-muted'>I'm researching environmental</span>
                                <hr />
                                <Card.Title><b>Recents</b></Card.Title>
                                <Card.Body style={{ overflowY: 'auto' }}>

                                    <Card className={`mb-3 ${styles.border}`}>
                                        <Card.Body>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <label className='text-muted fw-bold'>DEEDS</label>
                                                <div className={styles.completed}>
                                                    <div style={{ color: 'green' }}>
                                                        <FaCheckCircle /> Completed
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <span><b>"Dog Bite Complaint"</b></span>
                                            </div>

                                            <div className={styles.days}>2 days ago</div>
                                        </Card.Body>

                                    </Card>
                                    <Card className={`mb-3 ${styles.border}`}>
                                        <Card.Body>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <label className='text-muted fw-bold'>DEEDS</label>
                                                <div className={styles.completed}>
                                                    <div style={{ color: 'green' }}>
                                                        <FaCheckCircle /> Completed
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <span><b>"Dog Bite Complaint"</b></span>
                                            </div>

                                            <div className={styles.days}>2 days ago</div>
                                        </Card.Body>
                                    </Card>
                                    <Card className={`mb-3 ${styles.border}`}>
                                        <Card.Body>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <label className='text-muted fw-bold'>DEEDS</label>
                                                <div className={styles.completed}>
                                                    <div style={{ color: 'green' }}>
                                                        <FaCheckCircle /> Completed
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <span><b>"Dog Bite Complaint"</b></span>
                                            </div>

                                            <div className={styles.days}>2 days ago</div>
                                        </Card.Body>
                                    </Card>
                                    <Card className={`mb-3 ${styles.border}`}>
                                        <Card.Body>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <label className='text-muted fw-bold'>DEEDS</label>
                                                <div className={styles.inProgress}>
                                                    <div style={{ color: 'orange' }}>
                                                        <FaSync style={{ color: 'orange' }} /> In Progress
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <span><b>"Dog Bite Complaint"</b></span>
                                            </div>

                                            <div className={styles.days}>2 days ago</div>
                                        </Card.Body>
                                    </Card>
                                    <Card className={`mb-3 ${styles.border}`}>
                                        <Card.Body>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <label className='text-muted fw-bold'>DEEDS</label>
                                                <div className={styles.failed}>
                                                    <div style={{ color: 'red' }} bg="danger">
                                                        <FaTimesCircle style={{ color: 'red' }} /> Failed
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <span><b>"Dog Bite Complaint"</b></span>
                                            </div>

                                            <div className={styles.days}>2 days ago</div>
                                        </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={5} style={{ maxHeight: '200px', display: 'flex', flexDirection: 'column' }}>
                        <Card style={{ flex: 1 }}>
                            <CardTitle className='p-2 mt-2 fs-3'><b>Case Flow</b>
                            </CardTitle>
                            <span className='p-2 fs-3' style={{ color: '#457aca' }}>Select the Document for darfting</span>
                            <Card.Body>
                                <div>
                                    <h4 style={{ paddingLeft: '27px' }}>Pre litigation</h4>
                                    <div className="d-flex align-items-start">
                                        <div className="d-flex align-items-center" style={{ position: 'relative' }}>
                                            <FontAwesomeIcon icon={faCircle} style={{ fontSize: '24px', color: '#025BD4', marginRight: '15px' }} />
                                            <div style={{ borderLeft: '5px solid grey', height: '1088%', position: 'absolute', left: '22%', top: '27px' }}></div>
                                        </div>
                                       
                                       
                                    </div>
                                    <div className="" style={{ paddingLeft: '27px' }}>
                                        <Card className='p-2'>
                                            <CardBody>
                                                <div className="d-flex align-items-start">
                                                    <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: '24px', color: 'grey', marginRight: '15px' }} />
                                                    <div>
                                                    <b>Legal Notice</b>
                                                    <br />
                                                    <span className='text-small text-muted'>Notifies this opposition party</span>
                                                    
                                                </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                        <Card className='mt-3 p-2'>
                                            <CardBody>
                                                <div className="d-flex align-items-start">
                                                    <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: '24px', color: 'grey', marginRight: '10px' }} />
                                                    <div>
                                                    <b>Replay to Legal Notice</b>
                                                    <br />
                                                    <span className='text-small text-muted'>Notifies this opposition party</span>
                                                    
                                                </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                                <div>
                                    <h4 className='mt-3' style={{ paddingLeft: '27px' }}>Liligation</h4>
                                    <div className="d-flex align-items-start">
                                        <div className="d-flex align-items-center" style={{ position: 'relative' }}>
                                            <FontAwesomeIcon icon={faCircle} style={{ fontSize: '24px', color: '#025BD4', marginRight: '15px' }} />
                                            <div style={{ borderLeft: '5px solid grey', height: '2032%', position: 'absolute', left: '22%', top: '27px' }}></div>
                                        </div>
                                        
                                    </div>
                                    <div className="mt-3" style={{ paddingLeft: '27px' }}>
                                        <Card className='p-2'>
                                            <CardBody>
                                                <div className="d-flex align-items-start">
                                                    <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: '24px', color: 'grey', marginRight: '15px' }} />
                                                    <div>
                    <b>Complaint</b>
                    <br />
                    <span className='text-small text-muted'>Notifies this opposition party</span>
                   
                </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                        <Card className='mt-3 p-2'>
                                            <CardBody>
                                                <div className="d-flex align-items-start">
                                                    <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: '24px', color: 'grey', marginRight: '10px' }} />
                                                    <div>
                    <b>Vakalatanama</b>
                    <br />
                    <span className='text-small text-muted'>Notifies this opposition party</span>
                   
                </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </div>
                                    <div className="mt-3" style={{ paddingLeft: '27px' }}>
                                        <Card className='p-2'>
                                            <CardBody>
                                                <div className="d-flex align-items-start">
                                                    <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: '24px', color: 'grey', marginRight: '15px' }} />
                                                    <div>
                    <b>Writting Statement/Answer</b>
                    <br />
                    <span className='text-small text-muted'>Notifies this opposition party</span>
                   
                </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                        <Card className='mt-3 p-2'>
                                            <CardBody>
                                                <div className="d-flex align-items-start">
                                                    <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: '24px', color: 'grey', marginRight: '10px' }} />
                                                    <div>
                    <b>Replay To Written Statement</b>
                    <br />
                    <span className='text-small text-muted'>Notifies this opposition party</span>
                   
                </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                                <div>
                                    <h4 style={{ paddingLeft: '27px' }}>Interiocutory Application</h4>
                                    <div className="d-flex align-items-start">
                                        <div className="d-flex align-items-center" style={{ position: 'relative' }}>
                                            <FontAwesomeIcon icon={faCircle} style={{ fontSize: '24px', color: '#025BD4', marginRight: '15px' }} />
                                            <div style={{ borderLeft: '5px solid grey', height: '100%', position: 'absolute', left: '22%', top: '27px' }}></div>
                                        </div>
                                    </div>
                                    <div className="mt-1" style={{ paddingLeft: '27px' }}>
                                        <Card className='p-2'>
                                            <CardBody>
                                                <div className="d-flex align-items-start">
                                                    <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: '24px', color: 'grey', marginRight: '15px' }} />
                                                    <div>
                    <b>Application For Temporary Injuction</b>
                    <br />
                    <span className='text-small text-muted'>Notifies this opposition party</span>
                   
                </div>
                                                </div>
                                            </CardBody>
                                        </Card>

                                    </div>
                                </div>
                            </Card.Body>

                        </Card>
                    </Col>


                    <Col xs={12} md={3} style={{ maxHeight: '200px', display: 'flex', flexDirection: 'column' }}>
                        <Card style={{ flex: 1 }}>
                        <Card.Body>
                                <div>
                                   
                                    <div className="d-flex align-items-start">
                                        <div className="d-flex align-items-center" style={{ position: 'relative' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: '24px', color: '#025BD4', marginRight: '15px' }} />
                                            <div style={{ borderLeft: '5px solid grey', height: '100%', position: 'absolute', left: '22%', top: '27px' }}></div>
                                        </div>
                                        <b>Start</b>
                                    </div>
                                    <div className="d-flex align-items-start mt-5">
                                        <div className="d-flex align-items-center" style={{ position: 'relative' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: '24px', color: '#025BD4', marginRight: '15px' }} />
                                            <div style={{ borderLeft: '5px solid grey', height: '100%', position: 'absolute', left: '22%', top: '27px' }}></div>
                                        </div>
                                        <b>Continue</b>
                                    </div>
                                    <div className="d-flex align-items-start mt-5">
                                        <div className="d-flex align-items-center" style={{ position: 'relative' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: '24px', color: '#025BD4', marginRight: '15px' }} />
                                            <div style={{ borderLeft: '5px solid grey', height: '100%', position: 'absolute', left: '22%', top: '27px' }}></div>
                                        </div>
                                        <b>Analysis</b>
                                    </div>
                                    <div className="d-flex align-items-start mt-5">
                                        <div className="d-flex align-items-center" style={{ position: 'relative' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: '24px', color: '#C1C1C1', marginRight: '15px' }} />
                                            <div style={{ borderLeft: '5px solid grey', height: '100%', position: 'absolute', left: '22%', top: '27px' }}></div>
                                        </div>
                                        <b>Legal Name</b>
                                    </div>
                                    <div className="d-flex align-items-start mt-5">
                                        <div className="d-flex align-items-center" style={{ position: 'relative' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: '24px', color: '#C1C1C1', marginRight: '15px' }} />
                                            <div style={{ borderLeft: '5px solid grey', height: '100%', position: 'absolute', left: '22%', top: '27px' }}></div>
                                        </div>
                                        <b>Legal Name</b>
                                    </div>
                                    <div className="d-flex align-items-start mt-5">
                                        <div className="d-flex align-items-center" style={{ position: 'relative' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: '24px', color: '#C1C1C1', marginRight: '15px' }} />
                                            <div style={{ borderLeft: '5px solid grey', height: '100%', position: 'absolute', left: '22%', top: '27px' }}></div>
                                        </div>
                                        <b>Legal Name</b>
                                    </div>
                                    <div className="d-flex align-items-start mt-5">
                                        <div className="d-flex align-items-center"  style={{ position: 'relative' }}>
                                            <FontAwesomeIcon  icon={faCheckCircle} style={{ fontSize: '24px', color: '#C1C1C1', marginRight: '15px' }} />
                                            <div style={{ borderLeft: '5px solid grey', height: '25%', position: 'absolute', left: '22%', top: '27px' }}></div>
                                        </div>
                                        <b>Legal Name</b>
                                    </div>
                                   
                                </div>
                                <div className='mt-4 d-flex justify-content-end align-items-center'>
                                <button className={`btn btn-lg ${styles.specail}`}onClick={handleClick} > Continue  </button></div>
                              
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Basicpage3