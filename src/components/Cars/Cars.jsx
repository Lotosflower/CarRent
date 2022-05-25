import styles from "./Cars.module.css";
import { Row, Col} from 'antd';
import CarsTable  from "./CarsTable"




export const Cars = () => {
  return(
    <div className = {styles.cars__container} >
     
          <Row className = {styles.cars__table}>
                <Col xs = { 34 } md= {{span : 23, offset : 0}}>
                    <CarsTable />
                </Col>
          </Row>   
         
             
    </div> 
)
} 
