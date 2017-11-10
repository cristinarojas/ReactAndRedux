import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends Component {
  //  Constructor La primer funcion que es ejecutada
  constructor(props, context) {
    super(props, context);
    console.log('parametro props', props); // { courses:[], dispatch:ƒ (action) history: {…}, location: {…}, params: {…}, route: {…}, routeParams: {…},…}
    console.log('parametro context', context); // Varios metodos como hasOwnProperty, isPrototypeOf

    // Local state
    this.state = {
      course: { title: '' }
    };
    console.log('Local state', this.state); // La primera vez course: { title: "" }

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  // Metodo - entra cada que se teclea algo en el input
  onTitleChange(event) {
    console.log('this.state.course dentro de onChange', this.state.course); // title:"h"
    const course = this.state.course;
    console.log('course dentro de onChange', course); // title:"h"
    console.log('course.title dentro de onChange', course.title); //hol ???

    course.title = event.target.value;
    console.log('course.title DESPUES dentro de onChange', course.title); //hola

    this.setState({course: course });
  }

  // Metodo
  onClickSave() {
    console.log('props en el onClickSave', this.props);
    console.log('this state dentro del onClickSave', this.state.course); //{title: "h"}
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  // Metodo render() de la clase
  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Courses</h2>

        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input
          type="submit"
          value="save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

// Props validations
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// Le paso el state del store de redux
function mapStateToProps(state, ownProps) {
  return { // retorna un objeto
    // state es el de redux store y el .courses es el reducer
    courses: state.courses // las propiedades que quiero ver en mi componente
  };
}

function mapDispatchToProps(dispatch) {  // que acciones estan disponibles en nuestro componente
  return { // retorna un objeto
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
