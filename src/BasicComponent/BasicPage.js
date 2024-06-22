import React from 'react';
import { Card, Col, Container, Row, Form } from 'react-bootstrap';
import { FaCheckCircle, FaSync, FaTimesCircle } from 'react-icons/fa';
import styles from './basicpage.module.css';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'; // Import the FontAwesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFileWord, faTimes,faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Basicpage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Page2');
    };
    return (
        <div className={styles.contentdiv}>
            <Container>
                <Row>
                    <Col xs={12} md={4} style={{ maxHeight: '200px', display: 'flex', flexDirection: 'column' }}>
                        <Card style={{ flex: 1 }}>
                            <Card.Body style={{ overflowY: 'auto' }}>
                                <Card.Title className={styles.colTitle}><b>Recent Studies</b></Card.Title>
                                <Card className={`mb-3 ${styles.border}`}>
                                    <Card.Body >
                                        <span className={styles.colTitle}><b>"Dog Bite Complaint"</b></span>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div className={styles.days}>2 days ago</div>
                                            <div className={styles.completed}>
                                                <div style={{ color: 'green' }}>
                                                    <FaCheckCircle /> Completed
                                                </div>
                                            </div>
                                        </div>


                                    </Card.Body>
                                </Card>
                                <Card className={`mb-3 ${styles.border}`}>
                                    <Card.Body >
                                        <span className={styles.colTitle}><b>"The Cyberbullying Conspiracy"</b></span>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div className={styles.days}>2 days ago</div>
                                            <div className={styles.completed}>
                                                <div style={{ color: 'green' }}>
                                                    <FaCheckCircle /> Completed
                                                </div>
                                            </div>
                                        </div>

                                    </Card.Body>
                                </Card>
                                <Card className={`mb-3 ${styles.border}`}>
                                    <Card.Body >
                                        <span className={styles.colTitle}><b>"The Data Breach Dilemma"</b></span>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div className={styles.days}>2 days ago</div>
                                            <div className={styles.completed}>
                                                <div style={{ color: 'green' }}>
                                                    <FaCheckCircle /> Completed
                                                </div>
                                            </div>
                                        </div>

                                    </Card.Body>
                                </Card>
                                <Card className={`mb-3 ${styles.border}`}>
                                    <Card.Body >
                                        <span className={styles.colTitle}><b>"The Data Breach Dilemma"</b></span>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div className={styles.days}>2 days ago</div>
                                            <div className={styles.inProgress}>
                                                <div style={{ color: 'orange' }}>
                                                <FaSync style={{ color: 'orange' }} /> In Progress
                                                </div>
                                            </div>
                                        </div>

                                    </Card.Body>
                                </Card>
                                <Card className={`mb-3 ${styles.border}`}>
                                    <Card.Body >
                                        <span className={styles.colTitle}><b>"The Data Breach Dilemma"</b></span>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div className={styles.days}>2 days ago</div>
                                            <div className={styles.failed}>
                                                <div style={{ color: 'red' }}>
                                                <FaTimesCircle style={{ color: 'red' }} /> Failed
                                                </div>
                                            </div>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={8} md={8} style={{ maxHeight: '200px', display: 'flex', flexDirection: 'column' }}>
                        <Card style={{ flex: 1 }}>
                            <Card.Body>
                                <Card.Title className={styles.colTitle2}>  <FontAwesomeIcon icon={faNewspaper} style={{ fontSize: '24px', color: '#3498db', marginRight: '10px' }} /><b>Get Complete Info about any case from AI- driven research assistance</b></Card.Title>
                                <Card className={`${styles.border2} mt-3`}>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" placeholder='Ex: Land dispute, Mumbai, Recent JudgeMent' rows={5} style={{ minHeight: '200px' }} />
                                    </Form.Group>
                                </Card>
                                <Card bg="light" className={`mt-3 text-center ${styles.border}`} style={{ border: '1px dotted #ccc' }}>
                                    <Card.Body>
                                        <div className="bg-light p-3 rounded-circle mb-3">
                                            <FontAwesomeIcon icon={faFileUpload} style={{ fontSize: '40px', color: '#909090' }} />
                                        </div>
                                        <p className="mb-0">Drag and Drop here Or click here to <a className='text-primary'><u>UploadFile</u></a></p>
                                        <h4 className='text-center mt-5 text-secondary'>
                                            Maximum Uploads : 1
                                        </h4>
                                        <span className='fs-6 text-secondary'>File format : JPG, PNG, docx, Pdf. etc</span>
                                    </Card.Body>
                                </Card>
                            </Card.Body>
                            <div className='d-flex align-items-center justify-content-between bg-light p-3 rounded'>
                                <div className="d-flex align-items-center">
                                    <h5 className='text-secondary mb-0 me-3'>Uploaded Files</h5>
                                    <span className='badge bg-info text-primary'>3/5</span>


                                </div>

                            </div>
                            <div className='p-3 mb-5'>
                                <Card bg="light" className={`mt-1 p-2 text-start d-flex align-items-start justify-content-between`} style={{ minHeight: '30px', position: 'relative' }}>
                                    <div className="d-flex align-items-start">
                                        <FontAwesomeIcon icon={faFilePdf} style={{ fontSize: '24px', color: '#e74c3c', marginRight: '10px' }} />
                                        <b>Case Document.pdf</b>
                                    </div>
                                    <FontAwesomeIcon icon={faTimes} style={{ position: 'absolute', top: '5px', right: '5px', cursor: 'pointer' }} />
                                </Card>

                                <Card bg="light" className={`mt-3 p-2 text-start d-flex align-items-start justify-content-between`} style={{ minHeight: '30px', position: 'relative' }}>
                                    <div className="d-flex align-items-start">
                                        <FontAwesomeIcon icon={faFileWord} style={{ fontSize: '24px', color: '#3498db', marginRight: '10px' }} />
                                        <b>Case Document.docx</b>
                                    </div>
                                    <FontAwesomeIcon icon={faTimes} style={{ position: 'absolute', top: '5px', right: '5px', cursor: 'pointer' }} />
                                </Card>

                                <Card bg="light" className={`mt-3 p-2 text-start d-flex align-items-start justify-content-between`} style={{ minHeight: '30px', position: 'relative' }}>
                                    <div className="d-flex align-items-start">
                                        <FontAwesomeIcon icon={faFileWord} style={{ fontSize: '24px', color: '#3498db', marginRight: '10px' }} />
                                        <b>Case Document.docx</b>
                                    </div>
                                    <FontAwesomeIcon icon={faTimes} style={{ position: 'absolute', top: '5px', right: '5px', cursor: 'pointer' }} />
                                </Card>
                            </div>
                            <div className='mb-4 d-flex justify-content-end align-items-center'>
                                <button className={`btn btn-lg ${styles.specail}`}onClick={handleClick}> Start  </button></div>
                        </Card>


                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Basicpage;
