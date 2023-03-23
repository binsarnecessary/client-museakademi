import React from "react";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import { Card } from "react-bootstrap";
import LiveData from "../Home/live/LiveData";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";

export const DetailLivestream = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const { itemId } = useParams();
  // const detailProduct = LiveData.find(item => item.id === parseInt(itemId));
  // const { id,name,chanel,image,eventStart,eventEnd,deskripsi,url} = detailProduct;
  const [livestreaming, setLivestreaming] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Check Valid Token From API
        const currentLivestreamingRequest = await axios.get(
          `https://server-museakademi-production.up.railway.app/api/livestreaming/${itemId}`
        );

        const currentLivestreamingResponse = currentLivestreamingRequest.data;

        if (currentLivestreamingResponse.status) {
          setLivestreaming(currentLivestreamingResponse.data.live);
        }
      } catch (err) {
        setLivestreaming(false);
      }
    };

    fetchData();
  }, []);
  console.log(livestreaming)

  useEffect(() => {
    const now = new Date();
    const eventMulai = new Date(livestreaming.liveStart);
    const eventSelesai = new Date(livestreaming.liveEnd);

    if (now > eventMulai && now < eventSelesai) {
        setIsButtonActive(true);
    } else {
        setIsButtonActive(false);
    }
}, [livestreaming]);

const handleClick = () => {
  // Handler untuk event onClick pada button produk
  if (isButtonActive) {
      // Aksi ketika button aktif di-klik
      window.open(livestreaming.youtubeUrl, '_blank');
  }
};

  const eventDate = new Date (livestreaming.liveStart);
  const date = eventDate.getDate();
  const month = new Intl.DateTimeFormat('id', { month: 'long' }).format(eventDate);
  const year = eventDate.getFullYear();
  const formattedDate = `${date} ${month} ${year}`;


      //membuat time start
      const eventTime = (livestreaming.liveStart);
      const timePart = eventTime.split('T') [1];
      const hours = timePart.split (':') [0];
      const minutes = timePart.split(':')[1];
      //membuat time end
      const endEventTime = (livestreaming.liveEnd);
      const endTime = endEventTime.split('T') [1];
      const endHours = endTime.split(':') [0];
      const endMinutes = endTime.split (':') [1];


  return (
    <div>
      <Navbar/>
      <section id="detailcourse">
        <div key={livestreaming.id} className="container mt-5 mb-5">
          <h4>Live Streaming</h4>
          <p>Temukan chanel yang sesuai dengan anda</p>
          <div class="row mt-3">
            <div class="col-5 ">
              <div className="poster">
                <Card style={{ width: "25rem" }}>
                  <Card.Img src={livestreaming.thumbnailLivestreaming} />
                </Card>
              </div>
              {/*here the content left*/}
            </div>
            <div class="col-7">
              {/*here the content*/}
              <Card>
                <Card.Body>
                  <h4>{livestreaming.titleLivestreaming}</h4>
                  <Card className="mb-4">
                    <Card.Body>
                      <Card.Title className="text-muted">
                        {livestreaming.namaChanel}
                      </Card.Title>
                      <Card.Text className="">{formattedDate}</Card.Text>
                      <Card.Text>{hours}.{minutes}-{endHours}.{endMinutes} WIB</Card.Text>
                      <div className="row">
                      <button onClick={handleClick} disabled={!isButtonActive} className={isButtonActive ? 'buy-button active' : 'buy-button disabled'}>{isButtonActive ? 'Join Live' : 'Live Tidak Tersedia'}</button>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card.Subtitle className="mb-2 font-weight-bold">
                    Deskripsi
                  </Card.Subtitle>
                  <Card.Text>
                    <p>
                      {livestreaming.deskripsiLive}
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        {/*disini sections baru setelah row dan colom  */}
      </section>
      <Footer />
    </div>
  );
};