import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { PROP_TYPES } from 'constants';
import { emitUserMessage, addUserMessage } from 'actions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel, CarouselInner, CarouselItem, Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText, Button } from 'mdbreact';

class Consultant extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const CONSULTANT = '您所预约的专家为： 陈峰浩 博士';
    const payload = '/comfirm_lm_consultant';
    this.props.submitCONSULTANT(payload, CONSULTANT);
  }
  render() {
    return (
      <div className={'client-side'}>
        { this.props.isLast && <Container>
          <Carousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
    <CarouselInner>
      <Row>
        <CarouselItem itemId="1">
          <Col md="4" className="clearfix d-none d-inline-block ">
          <Card narrow ecommerce className="mb-2">
            <CardImage cascade top src="http://harolz.com/assets/img/frank_chen.jpeg"
              alt="sample photo" />
            <CardBody cascade>
              <a href="#!" className="text-muted">
                <h5>首席医疗顾问</h5>
              </a>
              <CardTitle>
                <strong>
                  <a href="https://www.linkedin.com/in/frank-chen-297ab320">陈峰浩 博士</a>
                </strong>
              </CardTitle>
              <CardText>
              陈峰浩博士，2012年约翰·霍普金斯大学毕业，LINKMedicine的创始人，致力于开发大规模的生物医药大数据平台和分析工具，发掘人类整体发掘人类整体知识图谱，在世界范围内实现精准医疗的宏愿。
              </CardText>
              <Button color="primary" onClick={this.handleClick}>点击预约</Button>
            </CardBody>
          </Card>
          </Col>
          <Col md="4" className="clearfix d-none d-inline-block ">
          <Card narrow ecommerce className="mb-2">
            <CardImage cascade top src="http://harolz.com/assets/img/frank_chen.jpeg"
              alt="sample photo" />
            <CardBody cascade>
              <a href="#!" className="text-muted">
                <h5>首席医疗顾问</h5>
              </a>
              <CardTitle>
                <strong>
                  <a href="#!">陈峰浩 博士</a>
                </strong>
              </CardTitle>
              <CardText>
              陈峰浩博士，2012年约翰·霍普金斯大学毕业，LINKMedicine的创始人，致力于开发大规模的生物医药大数据平台和分析工具，发掘人类整体发掘人类整体知识图谱，在世界范围内实现精准医疗的宏愿。
              </CardText>
              <Button color="primary" onClick={this.handleClick}>点击预约</Button>
            </CardBody>
          </Card>
          </Col>
          <Col md="4" className="clearfix d-none d-inline-block ">
          <Card narrow ecommerce className="mb-2">
            <CardImage cascade top src="http://harolz.com/assets/img/frank_chen.jpeg" alt="sample photo" />
            <CardBody cascade>
              <a href="#!" className="text-muted">
                <h5>首席医疗顾问</h5>
              </a>
              <CardTitle>
                <strong>
                  <a href="#!">陈峰浩 博士</a>
                </strong>
              </CardTitle>
              <CardText>
              陈峰浩博士，2012年约翰·霍普金斯大学毕业，LINKMedicine的创始人，致力于开发大规模的生物医药大数据平台和分析工具，发掘人类整体发掘人类整体知识图谱，在世界范围内实现精准医疗的宏愿。
              </CardText>
              <Button color="primary" onClick={this.handleClick}>点击预约</Button>
            </CardBody>
          </Card>
          </Col>
        </CarouselItem>
        <CarouselItem itemId="2">
        <Col md="4" className="clearfix d-none d-inline-block">
          <Card narrow ecommerce className="mb-2">
            <CardImage cascade top src="http://harolz.com/assets/img/frank_chen.jpeg"
              alt="sample photo" />
            <CardBody cascade>
              <a href="#!" className="text-muted">
                <h5>首席医疗顾问</h5>
              </a>
              <CardTitle>
                <strong>
                  <a href="#!">陈峰浩 博士</a>
                </strong>
              </CardTitle>
              <CardText>
              陈峰浩博士，2012年约翰·霍普金斯大学毕业，LINKMedicine的创始人，致力于开发大规模的生物医药大数据平台和分析工具，发掘人类整体发掘人类整体知识图谱，在世界范围内实现精准医疗的宏愿。
              </CardText>
              <Button color="primary" onClick={this.handleClick}>点击预约</Button>
            </CardBody>
          </Card>
          </Col>
          <Col md="4" className="clearfix d-none d-inline-block ">
          <Card narrow ecommerce className="mb-2">
            <CardImage cascade top src="http://harolz.com/assets/img/frank_chen.jpeg"
              alt="sample photo" />
            <CardBody cascade>
              <a href="#!" className="text-muted">
                <h5>首席医疗顾问</h5>
              </a>
              <CardTitle>
                <strong>
                  <a href="#!">陈峰浩 博士</a>
                </strong>
              </CardTitle>
              <CardText>
              陈峰浩博士，2012年约翰·霍普金斯大学毕业，LINKMedicine的创始人，致力于开发大规模的生物医药大数据平台和分析工具，发掘人类整体发掘人类整体知识图谱，在世界范围内实现精准医疗的宏愿。
              </CardText>
              <Button color="primary" onClick={this.handleClick}>点击预约</Button>
            </CardBody>
          </Card>
          </Col>
          <Col md="4" className="clearfix d-none d-inline-block ">
          <Card narrow ecommerce className="mb-2">
            <CardImage cascade top src="http://harolz.com/assets/img/frank_chen.jpeg" alt="sample photo" />
            <CardBody cascade>
              <a href="#!" className="text-muted">
                <h5>首席医疗顾问</h5>
              </a>
              <CardTitle>
                <strong>
                  <a href="#!">陈峰浩 博士</a>
                </strong>
              </CardTitle>
              <CardText>
              陈峰浩博士，2012年约翰·霍普金斯大学毕业，LINKMedicine的创始人，致力于开发大规模的生物医药大数据平台和分析工具，发掘人类整体发掘人类整体知识图谱，在世界范围内实现精准医疗的宏愿。
              </CardText>
              <Button color="primary" onClick={this.handleClick}>点击预约</Button>
            </CardBody>
          </Card>
          </Col>
        </CarouselItem>
        <CarouselItem itemId="3">
        <Col md="4" className="clearfix d-none d-inline-block ">
          <Card narrow ecommerce className="mb-2">
            <CardImage cascade top src="http://harolz.com/assets/img/frank_chen.jpeg"
              alt="sample photo" />
            <CardBody cascade>
              <a href="#!" className="text-muted">
                <h5>首席医疗顾问</h5>
              </a>
              <CardTitle>
                <strong>
                  <a href="#!">陈峰浩 博士</a>
                </strong>
              </CardTitle>
              <CardText>
              陈峰浩博士，2012年约翰·霍普金斯大学毕业，LINKMedicine的创始人，致力于开发大规模的生物医药大数据平台和分析工具，发掘人类整体发掘人类整体知识图谱，在世界范围内实现精准医疗的宏愿。
              </CardText>
              <Button color="primary" onClick={this.handleClick}>点击预约</Button>
            </CardBody>
          </Card>
          </Col>
          <Col md="4" className="clearfix d-none d-inline-block ">
          <Card narrow ecommerce className="mb-2">
            <CardImage cascade top src="http://harolz.com/assets/img/frank_chen.jpeg"
              alt="sample photo" />
            <CardBody cascade>
              <a href="#!" className="text-muted">
                <h5>首席医疗顾问</h5>
              </a>
              <CardTitle>
                <strong>
                  <a href="#!">陈峰浩 博士</a>
                </strong>
              </CardTitle>
              <CardText>
              陈峰浩博士，2012年约翰·霍普金斯大学毕业，LINKMedicine的创始人，致力于开发大规模的生物医药大数据平台和分析工具，发掘人类整体发掘人类整体知识图谱，在世界范围内实现精准医疗的宏愿。
              </CardText>
              <Button color="primary" onClick={this.handleClick}>点击预约</Button>
            </CardBody>
          </Card>
          </Col>
          <Col md="4" className="clearfix d-none d-inline-block">
          <Card narrow ecommerce className="mb-2">
            <CardImage cascade top src="http://harolz.com/assets/img/frank_chen.jpeg" alt="sample photo" />
            <CardBody cascade>
              <a href="#!" className="text-muted">
                <h5>首席医疗顾问</h5>
              </a>
              <CardTitle>
                <strong>
                  <a href="#!">陈峰浩 博士</a>
                </strong>
              </CardTitle>
              <CardText>
              陈峰浩博士，2012年约翰·霍普金斯大学毕业，LINKMedicine的创始人，致力于开发大规模的生物医药大数据平台和分析工具，发掘人类整体发掘人类整体知识图谱，在世界范围内实现精准医疗的宏愿。
              </CardText>
              <Button color="primary" onClick={this.handleClick}>点击预约</Button>
            </CardBody>
          </Card>
          </Col>
        </CarouselItem>
      </Row>
    </CarouselInner>
  </Carousel>
        </Container>}
      </div>
      );
    }
  }

Consultant.propTypes = {
  message: PROP_TYPES.CONSULTANT
};

const mapStateToProps = state => ({
  inputState: state.behavior.get('disabledInput')
});
const mapDispatchToProps = dispatch => ({
    // toggleInputDisabled: _ => dispatch(toggleInputDisabled()),
  submitCONSULTANT: (payload, CONSULTANT) => {
    dispatch(emitUserMessage(payload));
    dispatch(addUserMessage(CONSULTANT));
    // dispatch(toggleInputDisabled());
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Consultant);
