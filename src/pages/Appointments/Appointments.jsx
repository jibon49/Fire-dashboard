import Pagination from "../Shared/Pagination/Pagination"
import BookingLink from "./BookingLink"
import CardSection from "./CardSection"
import ServiceTable from "./ServiceTable"


const Appointments = () => {
  return (
    <div className="h-full">
        <CardSection></CardSection>
        <BookingLink></BookingLink>
        <ServiceTable></ServiceTable>
    </div>
  )
}

export default Appointments