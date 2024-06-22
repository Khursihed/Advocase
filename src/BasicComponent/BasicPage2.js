import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from './basicpage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Button } from 'react-bootstrap'; // Import Button from react-bootstrap or your preferred UI library

function Basicpage2() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };
    const FinalPage = () => {
        navigate('/Page3');
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
                                <h5>Text Entered</h5>
                                <span className='text-secondary'>I'm researching environmental regulations. can you Summerize the clean</span>
                                <hr />

                                <Card className={`mb-3 ${styles.border}`} style={{ backgroundColor: '#DEFEFF' }}>

                                    <Card.Body>
                                        <div className='d-flex align-items-center justify-content-between p-3 rounded'>
                                            <div className="d-flex align-items-center">
                                                <h5 className='text-secondary mb-0 me-3'>Uploaded Files</h5>
                                                <span className='badge bg-info text-primary'>5/5</span>


                                            </div>

                                        </div>
                                        <Card bg="light" className="mt-1 p-2 text-start d-flex align-items-start justify-content-between" style={{ minHeight: '30px', position: 'relative' }}>
                                            <div className="d-flex align-items-center justify-content-between mb-2 w-100">
                                                <div className="d-flex align-items-start">
                                                    <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: '24px', color: '#e74c3c', marginRight: '10px' }} />
                                                    <b>Case Document.pdf</b>
                                                </div>
                                                <FontAwesomeIcon icon={faTimes} style={{ cursor: 'pointer' }} />
                                            </div>
                                        </Card>

                                        <Card bg="light" className={`mt-1 p-2 text-start d-flex align-items-start justify-content-between`} style={{ minHeight: '30px', position: 'relative' }}>
                                            <div className="d-flex align-items-center justify-content-between  mb-2 w-100">
                                                <div className="d-flex align-items-start">
                                                    <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: '24px', color: '#e74c3c', marginRight: '10px' }} />
                                                    <b>Case Document.pdf</b>
                                                </div>
                                                <FontAwesomeIcon icon={faTimes} style={{ cursor: 'pointer' }} />
                                            </div>
                                        </Card>

                                        <Card bg="light" className={`mt-1 p-2 text-start d-flex align-items-start justify-content-between`} style={{ minHeight: '30px', position: 'relative' }}>
                                            <div className="d-flex align-items-center justify-content-between  mb-2 w-100">
                                                <div className="d-flex align-items-start">
                                                    <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: '24px', color: '#e74c3c', marginRight: '10px' }} />
                                                    <b>Case Document.pdf</b>
                                                </div>
                                                <FontAwesomeIcon icon={faTimes} style={{ cursor: 'pointer' }} />
                                            </div>
                                        </Card>

                                        <Card bg="light" className={`mt-1 p-2 text-start d-flex align-items-start justify-content-between`} style={{ minHeight: '30px', position: 'relative' }}>
                                            <div className="d-flex align-items-center justify-content-between  mb-2 w-100">
                                                <div className="d-flex align-items-start">
                                                    <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: '24px', color: '#e74c3c', marginRight: '10px' }} />
                                                    <b>Case Document.pdf</b>
                                                </div>
                                                <FontAwesomeIcon icon={faTimes} style={{ cursor: 'pointer' }} />
                                            </div>
                                        </Card>
                                    </Card.Body>
                                </Card>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={8} md={8} style={{ maxHeight: '200px', display: 'flex', flexDirection: 'column' }}>
                        <Card style={{ flex: 1 }}>
                            <Card.Body className='mb-5'>
                                <Tabs
                                    defaultActiveKey="Questions"
                                    id="uncontrolled-tab-example"
                                    className="mb-5"
                                >
                                    <Tab eventKey="Case Desc" title="Case Desc" disabled>
                                        Case Desc
                                    </Tab>
                                    <Tab eventKey="Acts and Laws" title="Acts and Laws" disabled>
                                        Acts and Laws
                                    </Tab>
                                    <Tab eventKey="Judgement" title="Judgement" disabled>
                                        Judgement
                                    </Tab>
                                    <Tab eventKey="Templates" title="Templates" disabled>
                                        Templates
                                    </Tab>
                                    <Tab eventKey="Questions" title={<span className={styles.tabTitle}>Questions</span>}>
                                        <b><span className='fs-3'>Questions</span></b>
                                        <div className='mt-4 d-flex justify-content-start align-items-center'>
                                            <Button variant="primary" className={`btn-lg ${styles.ques} me-2`}>By Petitioner</Button>
                                            <Button variant="primary" className={`btn-lg ${styles.que2}`}>By Respondent</Button>
                                        </div>
                                        <div className={styles.questionnaire}>
                                            <div className={styles.question}>
                                                <b>1. Was the Dog on a leash or under the Control of the owner at the time of the Incident ?</b>
                                                <div className="reason"><b>Reason:</b> <span className="small">This question aims to establish whether the owner was negligent in controlling the dog.</span></div>
                                            </div>
                                            <hr />
                                            <div className={styles.question}>
                                                <b>2. Was the Dog on a leash or under the Control of the owner at the time of the Incident ?</b>
                                                <div className="reason"><b>Reason:</b> <span className="small">This question aims to establish whether the owner was negligent in controlling the dog.</span></div>
                                            </div>
                                            <hr />
                                            <div className={styles.question}>
                                                <b>3. Was the Dog on a leash or under the Control of the owner at the time of the Incident ?</b>
                                                <div className="reason"><b>Reason:</b> <span className="small">This question aims to establish whether the owner was negligent in controlling the dog.</span></div>
                                            </div>
                                            <hr />
                                            <div className={styles.question}>
                                                <b>4. Was the Dog on a leash or under the Control of the owner at the time of the Incident ?</b>
                                                <div className="reason"><b>Reason:</b> <span className="small">This question aims to establish whether the owner was negligent in controlling the dog.</span></div>
                                            </div>
                                            <hr />
                                            <div className={styles.question}>
                                                <b>5. Was the Dog on a leash or under the Control of the owner at the time of the Incident ?</b>
                                                <div className="reason"><b>Reason:</b> <span className="small">This question aims to establish whether the owner was negligent in controlling the dog.</span></div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="Support" title="Support" disabled>
                                        Support
                                    </Tab>
                                </Tabs>
                            </Card.Body>
                            <div className='mb-4 d-flex justify-content-end align-items-center'>
                                <button className={`btn btn-lg ${styles.specail}`} onClick={FinalPage}> Final Page  </button></div>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Basicpage2