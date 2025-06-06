// import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations></CabinTableOperations>
      </Row>
      <Row>
        <CabinTable />
        <AddCabin></AddCabin>
      </Row>
    </>
  );
}

export default Cabins;
