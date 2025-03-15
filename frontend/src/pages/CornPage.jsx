import Navbar from "../components/nav-bar"
import Footer from "../components/footer"
import Corn from "../BookingFlow_components/component_Corn/Corn"
import { useContext,useEffect } from "react";
import { BookingContext } from "../BookingFlow_components/Context";
import { useNavigate } from "react-router-dom";
function CornPage() {
  const { movie_id, selectedDate,selectedTime, selectedTheater,selectedRoomId,selectedSeats } = useContext(BookingContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!movie_id || !selectedDate || !selectedTime || !selectedTheater || !selectedRoomId || !selectedSeats) {
      navigate("/");
    }
  }, [movie_id, selectedDate, selectedTime, selectedTheater, selectedRoomId, selectedSeats,navigate]);
  return (
    <>
    <Navbar></Navbar>
    <Corn></Corn>
    <Footer></Footer>
    </>
  )
}

export default CornPage