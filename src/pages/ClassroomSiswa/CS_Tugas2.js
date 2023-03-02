import React from 'react'
import { Container, Card, Button, Table } from 'react-bootstrap'

const CS_Tugas2 = () => {
  return (
    <Container>
        
          <h2>Tugas & Evaluasi</h2> 
            <Card className='mt-5'>
                <Card.Header as="h5" className='text-muted'>Tugas & Evaluasi</Card.Header>
                    <Card.Body>
                            <Table>
                            <thead>
                                <tr className='small text-muted'>
                                    <td width={'35%'}>Judul</td>
                                    <td width={'15%'}>Mulai</td>
                                    <td width={'15%'}>Selesai</td>
                                </tr>
                            </thead>
                            <tbody className='pt-5 mb-5'>
                                <tr>
                                    <td>Pengenalan UI/UX</td>
                                    <td>Jumat, 24 Julu 2020</td>
                                    <td>14.00-16.00 WIB</td>
                                </tr>
                            </tbody>
                            </Table>
                            <Button variant="danger">Open</Button>
                    </Card.Body>
            </Card> 

            <Card className='mt-5'>
                <Card.Header as="h5" className='text-muted'>Tugas & Evaluasi</Card.Header>
                    <Card.Body>
                            <Table>
                            <thead>
                                <tr className='small text-muted'>
                                    <td width={'35%'}>Judul</td>
                                    <td width={'15%'}>Mulai</td>
                                    <td width={'15%'}>Selesai</td>
                                </tr>
                            </thead>
                            <tbody className='pt-5 mb-5'>
                                <tr>
                                    <td>Pengenalan UI/UX</td>
                                    <td>Jumat, 24 Julu 2020</td>
                                    <td>14.00-16.00 WIB</td>
                                </tr>
                            </tbody>
                            </Table>
                            <Button variant="danger">Open</Button>
                    </Card.Body>
            </Card>
       
    </Container>
  )
}

export default CS_Tugas2