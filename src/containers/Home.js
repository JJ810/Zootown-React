import React from "react";
import { Footer, Header } from "../components/index";
import {
  OurServicesSection,
  PricePlan,
  StudentJumbotron,
  BlogSection,
  BenefitsSection,
  Reviews
} from "../components/home";
import gpl from "graphql-tag";
import { graphql } from "react-apollo";
import { getPlans } from "../actions/plans";
import { connect } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const HomeQuery = gpl`
  query {
    plans{
      id
      name
      price
      users{
        email
        password
      }
    }
    users{
      id
      email
    }
  }
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page
    };
  }

  componentDidMount() {
    const succ = data => {};
    this.props.dispatch(
      getPlans(
        `
      query {
        plans{
          id
          name
        }
      }
    `,
        succ
      )
    );
  }

  render() {
    const { page } = this.state;

    return (
      <div>
        <Header parent="home" page={page} />
        <main ref="main">
          <StudentJumbotron page={page} />
          <Reviews page={page} />
          {page === "students" ? <BlogSection /> : null}
          {page === "employer" ? <PricePlan /> : null}
          <BenefitsSection page={page} />
          <OurServicesSection page={page} />
          <Footer page={this.props.page} />
        </main>
      </div>
    );
  }
}
const HomeWithData = graphql(HomeQuery)(Home);

const mapStateToProps = state => {
  return {
    plans: state.common.plans
  };
};
const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeWithData);
