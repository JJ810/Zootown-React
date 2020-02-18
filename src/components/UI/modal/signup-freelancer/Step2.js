import React from 'react';
import { Input, Button, Select, DatePicker } from '../../../../components/UI';
import { Form, Radio, Select as AntdSelect } from 'antd';
import moment from 'moment';
import { LANGUAGES } from '../../../../config/constants';

const universities = [
  ' University of Aberdeen',
  'Abertay University',
  'Aberystwyth University',
  'Anglia Ruskin University',
  'Arden University',
  'Aston University',
  'Bangor University',
  'University of Bath',
  'Bath Spa University',
  'University of Bedfordshire',
  'University of Birmingham',
  'Birmingham City University',
  'University College Birmingham',
  'Bishop Grosseteste University',
  'University of Bolton',
  'The Arts University Bournemouth',
  'Bournemouth University',
  'BPP University',
  'University of Bradford',
  'University of Brighton',
  'University of Bristol',
  'Brunel University, Uxbridge and London',
  'University of Buckingham',
  'Buckinghamshire New University',
  'University of Cambridge',
  'Canterbury Christ Church University',
  'Cardiff Metropolitan University',
  'Cardiff University',
  'University of Chester, Chester and Warrington',
  'University of Chichester',
  'Coventry University',
  'Cranfield University',
  'University for the Creative Arts',
  'University of Cumbria',
  'De Montfort University',
  'University of Derby',
  'University of Dundee',
  'Durham Castle, a building of Durham University',
  'Durham University',
  'Earlham Hall at the University of East Anglia',
  'University of East Anglia',
  'University of East London',
  'Edge Hill University',
  'The Old College of the University of Edinburgh',
  'University of Edinburgh',
  'Edinburgh Napier University',
  'University of Essex  Colchester and Southend-on-Sea',
  'University of Exeter',
  'Falmouth University',
  'University of Glasgow',
  'Glasgow Caledonian University',
  'University of Gloucestershire',
  'University of Greenwich',
  'Harper Adams University',
  'Heriot-Watt University',
  'University of Hertfordshire',
  'University of the Highlands & Islands',
  'University of Huddersfield',
  'University of Hull',
  'Imperial College London',
  'Keele University, Staffordshire',
  'University of Kent',
  'Kingston University',
  'University of Central Lancashire, Preston and Burnley',
  'Lancaster University',
  'The Parkinson Building at the University of Leeds',
  'University of Leeds',
  'Leeds Arts University',
  'Leeds Beckett University',
  'Leeds Trinity University',
  'University of Leicester',
  'University of Lincoln, Lincoln, Riseholme and Holbeach',
  'University of Liverpool',
  'Liverpool Hope University',
  'Liverpool John Moores University',
  'University of London',
  'Birkbeck, University of London',
  'City, University of London',
  'Royal Central School of Speech and Drama',
  'Courtauld Institute of Art',
  'Goldsmiths, University of London',
  'Institute of Cancer Research',
  "King's College London",
  "The King's Building of King's College London",
  'London Business School',
  'London School of Economics and Political Science (LSE)',
  'London School of Hygiene and Tropical Medicine',
  'Queen Mary, University of London',
  'Royal Academy of Music',
  'Royal Holloway, University of London, Egham',
  'Royal Veterinary College',
  "St George's, University of London",
  'School of Oriental and African Studies (SOAS)',
  'University College London (UCL)',
  "The Founder's Building of Royal Holloway",
  'University College London Main Building',
  'London Metropolitan University',
  'London South Bank University',
  'Loughborough University',
  'University of Manchester',
  'Manchester Metropolitan University',
  'Middlesex University',
  'Newcastle University',
  'Newman University',
  'University of Northampton',
  'Northumbria University',
  'Norwich University of the Arts',
  'University of Nottingham',
  'Nottingham Trent University',
  'The Open University',
  'University of Oxford',
  'Oxford Brookes University',
  'Plymouth Marjon University',
  'University of Plymouth',
  'University of Portsmouth',
  'Queen Margaret University',
  "Queen's University Belfast",
  'Ravensbourne University London',
  'Foxhill House, home of the School of Law',
  'University of Reading',
  "Regent's University London",
  'The Robert Gordon University',
  'Roehampton University',
  'Royal Agricultural University',
  'University of Salford',
  'University of Sheffield',
  'Sheffield Hallam University',
  'University of South Wales',
  'University of Southampton',
  'Solent University',
  "St Salvator's Quad at the University of St Andrews",
  'University of St Andrews',
  "St Mary's University",
  'Staffordshire University',
  'University of Stirling',
  'University of Strathclyde',
  'University of Strathclyde',
  'University of Suffolk',
  'University of Sunderland',
  'University of Surrey',
  'University of Sussex',
  'Swansea University',
  'Teesside University',
  'University of Ulster',
  'University of the Arts London',
  'Ulster University, Coleraine',
  'University of Law',
  'University of Wales',
  'University of Warwick',
  'University of the West of England',
  'University of the West of Scotland',
  'University of West London',
  'University of Westminster',
  'University of Winchester',
  'University of Wolverhampton',
  'University of Worcester',
  'Wrexham Glyndŵr University',
  'University of York',
  'York St John University'
];
class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: 0,
      degrees: []
    };
  }

  onChangeDate = (e, key) => {
    this.setState({ [key]: e });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onClickNext(3, { ...values, ...this.state });
      }
    });
  };

  handleChange = value => {};

  onChangeOption = e => {
    this.setState({ option: e.target.value, degrees: [] });
  };

  onAddDegree = () => {
    this.setState({
      degrees: [...this.state.degrees, this.state.degrees.length]
    });
  };

  onDeleteDegree = () => {
    const { degrees } = this.state;
    this.setState({ degrees: degrees.slice(0, degrees.length - 1) });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    let { data } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} className="SignupContent__Form login-form">
        <div className="text-center">
          I am a:
          <Form.Item>
            <Radio.Group name="radiogroup" defaultValue={this.state.option} onChange={this.onChangeOption}>
              <Radio value={0}>Other</Radio>
              <Radio value={1}>Apprentice</Radio>
              <Radio value={2}>Undergraduate</Radio>
              <Radio value={3}>Graduate</Radio>
              <Radio value={4}>Postgraduate</Radio>
            </Radio.Group>
          </Form.Item>
        </div>

        {this.state.option === 1 && (
          <div className="SignupContent__Form__Head">
            <div className="SignupContent__Form__Head--Col">
              <Form.Item>
                {getFieldDecorator('job_title', {
                  initialValue: data.job_title,
                  rules: [
                    {
                      required: true,
                      message: 'Please input current job title'
                    }
                  ]
                })(<Input type="text" placeholder="Input Your Text Here" label="Current Job Title" />)}
              </Form.Item>

              <Form.Item>
                {getFieldDecorator('school', {
                  initialValue: data.school,
                  rules: [{ required: true, message: 'Please input school attended' }]
                })(<Input type="text" placeholder="Input Your Text Here" label="School Attended" />)}
              </Form.Item>
            </div>
            <div className="SignupContent__Form__Head--Col">
              <Form.Item>
                <DatePicker
                  onChange={e => this.onChangeDate(e, 'start_date')}
                  defaultValue={moment('01/01/2015', ['DD/MM/YYYY', 'DD/MM/YY'][0])}
                  label="School Start date"
                  format={['DD/MM/YYYY', 'DD/MM/YY']}
                />
              </Form.Item>
              <Form.Item>
                <DatePicker
                  onChange={e => this.onChangeDate(e, 'end_date')}
                  defaultValue={moment('01/01/2015', ['DD/MM/YYYY', 'DD/MM/YY'][0])}
                  label="School End date"
                  format={['DD/MM/YYYY', 'DD/MM/YY']}
                />
              </Form.Item>
            </div>
            <div className="SignupContent__Form__Head--Col">
              <Form.Item>
                {getFieldDecorator('status', {
                  initialValue: data.status,
                  rules: [{ required: true, message: 'Please input your status' }]
                })(
                  <Select size="default" placeholder="Input Your Text Here" onChange={this.handleChange} label="Status" style={{}}>
                    <AntdSelect.Option key={1}>Employee</AntdSelect.Option>
                    <AntdSelect.Option key={2}>Self-employed</AntdSelect.Option>
                    <AntdSelect.Option key={3}>Freelancer</AntdSelect.Option>
                    <AntdSelect.Option key={4}>Unemployed</AntdSelect.Option>
                    <AntdSelect.Option key={5}>Actively Looking for work</AntdSelect.Option>
                    <AntdSelect.Option key={6}>Not able to work</AntdSelect.Option>
                    <AntdSelect.Option key={7}>I am a carer</AntdSelect.Option>
                    <AntdSelect.Option key={8}>Studying</AntdSelect.Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('language', {
                  initialValue: data.language,
                  rules: [
                    {
                      required: true,
                      message: 'Please input your language'
                    }
                  ]
                })(
                  <Select mode="multiple" size="default" placeholder="Choose from Dropdown" onChange={this.handleChange} label="What language do you speak?" style={{}}>
                    {Object.keys(LANGUAGES).map(item => {
                      return <AntdSelect.Option key={item}>{LANGUAGES[item].name}</AntdSelect.Option>;
                    })}
                  </Select>
                )}
              </Form.Item>
            </div>
          </div>
        )}

        {(this.state.option === 3 || this.state.option === 2) && (
          <div className="SignupContent__Form__Head">
            <div className="SignupContent__Form__Head--Col">
              <Form.Item>
                {getFieldDecorator('job_title', {
                  initialValue: data.job_title,
                  rules: [{ required: true, message: 'Please input your job title' }]
                })(<Input type="text" placeholder="Input Your Text Here" label="Current Job Title" />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('language', {
                  initialValue: data.language,
                  rules: [
                    {
                      required: true,
                      message: 'Please input your language'
                    }
                  ]
                })(
                  <Select mode="multiple" size="default" placeholder="Choose from Dropdown" onChange={this.handleChange} label="What language do you speak?" style={{}}>
                    {Object.keys(LANGUAGES).map(item => {
                      return <AntdSelect.Option key={item}>{LANGUAGES[item].name}</AntdSelect.Option>;
                    })}
                  </Select>
                )}
              </Form.Item>
            </div>
            <div className="SignupContent__Form__Head--Col">
              <Form.Item>
                {getFieldDecorator('university', {
                  initialValue: data.university,
                  rules: [{ required: true, message: 'Please input your university' }]
                })(
                  <Select size="default" placeholder="Choose from Dropdown" onChange={this.handleChange} label="University" style={{}}>
                    {universities.map((item, index) => (
                      <AntdSelect.Option key={index}>{item}</AntdSelect.Option>
                    ))}
                  </Select>
                )}
              </Form.Item>

              <Form.Item>
                {getFieldDecorator('degree', {
                  initialValue: data.degree,
                  rules: [{ required: true, message: 'Please input your job degree' }]
                })(<Input type="text" placeholder="Input Your Text Here" label="University Degree course" />)}
                {/* {getFieldDecorator("degree", {
                  initialValue: data.degree,
                  rules: [
                    { required: true, message: "Please input your degree" }
                  ]
                })(
                  
                  <Select
                    size="default"
                    placeholder="Choose from Dropdown"
                    onChange={this.handleChange}
                    label="University Degree course"
                    style={{}}
                  >
                    <AntdSelect.Option key={"GOOD"}>GOOD</AntdSelect.Option>
                    <AntdSelect.Option key={"MEDIUM"}>MEDIUM</AntdSelect.Option>
                    <AntdSelect.Option key={"EXELLENT"}>
                      EXELLENT
                    </AntdSelect.Option>
                  </Select>
                )} */}
              </Form.Item>
            </div>
            <div className="SignupContent__Form__Head--Col">
              <Form.Item>
                <DatePicker
                  onChange={e => this.onChangeDate(e, 'start_date')}
                  defaultValue={moment('01/01/2015', ['DD/MM/YYYY', 'DD/MM/YY'][0])}
                  label="Course start date"
                  format={['DD/MM/YYYY', 'DD/MM/YY']}
                  name="date1"
                />
              </Form.Item>
              <Form.Item>
                <DatePicker
                  onChange={e => this.onChangeDate(e, 'end_date')}
                  defaultValue={moment('01/01/2015', ['DD/MM/YYYY', 'DD/MM/YY'][0])}
                  label="Course end date"
                  format={['DD/MM/YYYY', 'DD/MM/YY']}
                  name="date2"
                />
              </Form.Item>
            </div>
          </div>
        )}

        {this.state.option === 4 && (
          <div className="SignupContent__Form__Head">
            <div className="SignupContent__Form__Head--Col">
              <Form.Item>
                {getFieldDecorator('university', {
                  initialValue: data.university,
                  rules: [{ required: true, message: 'Please input your university' }]
                })(<Input type="text" placeholder="Input Your Text Here" label="University" />)}
              </Form.Item>

              <Form.Item>
                {getFieldDecorator('school', {
                  initialValue: data.school,
                  rules: [{ required: true, message: 'Please input your school' }]
                })(
                  <Select size="default" placeholder="Input Your Text Here" onChange={this.handleChange} label="Degree" style={{}}>
                    {Object.keys(LANGUAGES).map(item => {
                      return <AntdSelect.Option key={item}>{LANGUAGES[item].name}</AntdSelect.Option>;
                    })}
                  </Select>
                )}
              </Form.Item>
            </div>
            <div className="SignupContent__Form__Head--Col">
              <Form.Item>
                <DatePicker
                  onChange={e => this.onChangeDate(e, 'year_to_year')}
                  defaultValue={moment('01/01/2015', ['DD/MM/YYYY', 'DD/MM/YY'][0])}
                  label="From Year – To Year"
                  format={['DD/MM/YYYY', 'DD/MM/YY']}
                />
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('job_title', {
                  initialValue: data.job_title,
                  rules: [
                    {
                      required: true,
                      message: 'Please input your job title'
                    }
                  ]
                })(<Input type="text" placeholder="Input Your Text Here" label="Job Title" />)}
              </Form.Item>
            </div>
            <div className="SignupContent__Form__Head--Col">
              <Form.Item>
                {getFieldDecorator('grade', {
                  initialValue: data.grade,
                  rules: [{ required: true, message: 'Please input your grade' }]
                })(
                  <Select size="default" placeholder="Input Your Text Here" onChange={this.handleChange} label="Grade" style={{}}>
                    <AntdSelect.Option key={1}>Predicted Grade</AntdSelect.Option>
                    <AntdSelect.Option key={2}>Grade Achieved</AntdSelect.Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('language', {
                  initialValue: data.language,
                  rules: [
                    {
                      required: true,
                      message: 'Please input your language'
                    }
                  ]
                })(
                  <Select mode="multiple" size="default" placeholder="Choose from Dropdown" onChange={this.handleChange} label="What language do you speak?" style={{}}>
                    {Object.keys(LANGUAGES).map(item => {
                      return <AntdSelect.Option key={item}>{LANGUAGES[item].name}</AntdSelect.Option>;
                    })}
                  </Select>
                )}
              </Form.Item>
            </div>
          </div>
        )}

        {this.state.option === 0 && (
          <div className="SignupContent__Form__Head">
            <div className="SignupContent__Form__Head--Col">
              <Form.Item>
                {getFieldDecorator('job_title', {
                  initialValue: data.job_title,
                  rules: [{ required: true, message: 'Please input your job title' }]
                })(<Input type="text" placeholder="Input Your Text Here" label="Current Job Title" />)}
              </Form.Item>

              <Form.Item>
                {getFieldDecorator('school', {
                  initialValue: data.school,
                  rules: [{ required: true, message: 'Please input your school' }]
                })(<Input type="text" placeholder="Input Your Text Here" label="School Attended" />)}
              </Form.Item>
            </div>
            <div className="SignupContent__Form__Head--Col">
              <Form.Item>
                <DatePicker
                  onChange={e => {
                    console.log('e', e);
                    this.onChangeDate(e, 'start_date');
                  }}
                  defaultValue={moment('01/01/2015', ['DD/MM/YYYY', 'DD/MM/YY'][0])}
                  label="Course start date"
                  format={['DD/MM/YYYY', 'DD/MM/YY']}
                />
              </Form.Item>
              <Form.Item>
                <DatePicker
                  onChange={e => this.onChangeDate(e, 'end_date')}
                  defaultValue={moment('01/01/2015', ['DD/MM/YYYY', 'DD/MM/YY'][0])}
                  label="Course end date"
                  format={['DD/MM/YYYY', 'DD/MM/YY']}
                />
              </Form.Item>
            </div>
            <div className="SignupContent__Form__Head--Col">
              <Form.Item>
                {getFieldDecorator('status', {
                  initialValue: data.status,
                  rules: [{ required: true, message: 'Please input your status' }]
                })(
                  <Select size="default" placeholder="Input Your Text Here" onChange={this.handleChange} label="Status" style={{}}>
                    <AntdSelect.Option key={1}>Employee</AntdSelect.Option>
                    <AntdSelect.Option key={2}>Self-employed</AntdSelect.Option>
                    <AntdSelect.Option key={3}>Freelancer</AntdSelect.Option>
                    <AntdSelect.Option key={4}>Unemployed</AntdSelect.Option>
                    <AntdSelect.Option key={5}>Actively Looking for work</AntdSelect.Option>
                    <AntdSelect.Option key={6}>Not able to work</AntdSelect.Option>
                    <AntdSelect.Option key={7}>I am a carer</AntdSelect.Option>
                    <AntdSelect.Option key={8}>Studying</AntdSelect.Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('language', {
                  initialValue: data.language,
                  rules: [
                    {
                      required: true,
                      message: 'Please input your language'
                    }
                  ]
                })(
                  <Select mode="multiple" size="default" placeholder="Choose from Dropdown" onChange={this.handleChange} label="What language do you speak?" style={{}}>
                    {Object.keys(LANGUAGES).map(item => {
                      return <AntdSelect.Option key={item}>{LANGUAGES[item].name}</AntdSelect.Option>;
                    })}
                  </Select>
                )}
              </Form.Item>
            </div>
          </div>
        )}

        {this.state.degrees.map(item => {
          return (
            <div className="SignupContent__Form__Head" key={item}>
              <div className="SignupContent__Form__Head--Col">
                <Form.Item>
                  {getFieldDecorator('university' + item, {
                    initialValue: data['university' + item],
                    rules: [
                      {
                        required: true,
                        message: 'Please input your university'
                      }
                    ]
                  })(
                    <Select size="default" placeholder="Choose from Dropdown" onChange={this.handleChange} label="University" style={{}}>
                      <AntdSelect.Option key={'BKDN'}>BKDN</AntdSelect.Option>
                      <AntdSelect.Option key={'UEF'}>UEF</AntdSelect.Option>
                      <AntdSelect.Option key={'NEU'}>NEU</AntdSelect.Option>
                    </Select>
                  )}
                </Form.Item>

                <Form.Item>
                  {getFieldDecorator('degree' + item, {
                    initialValue: data['degree' + item],
                    rules: [{ required: true, message: 'Please input your degree' }]
                  })(
                    <Select size="default" placeholder="Choose from Dropdown" onChange={this.handleChange} label="University Degree course" style={{}}>
                      <AntdSelect.Option key={'GOOD'}>GOOD</AntdSelect.Option>
                      <AntdSelect.Option key={'MEDIUM'}>MEDIUM</AntdSelect.Option>
                      <AntdSelect.Option key={'EXELLENT'}>EXELLENT</AntdSelect.Option>
                    </Select>
                  )}
                </Form.Item>
              </div>
              <div className="SignupContent__Form__Head--Col">
                <Form.Item>
                  <DatePicker
                    onChange={e => this.onChangeDate(e, 'start_date' + item)}
                    defaultValue={moment('01/01/2015', ['DD/MM/YYYY', 'DD/MM/YY'][0])}
                    label="Course start date"
                    format={['DD/MM/YYYY', 'DD/MM/YY']}
                  />
                </Form.Item>
                <Form.Item>
                  <DatePicker
                    onChange={e => this.onChangeDate(e, 'end_date' + item)}
                    defaultValue={moment('01/01/2015', ['DD/MM/YYYY', 'DD/MM/YY'][0])}
                    label="Course end date"
                    format={['DD/MM/YYYY', 'DD/MM/YY']}
                  />
                </Form.Item>
              </div>
            </div>
          );
        })}

        {this.state.option >= 2 && (
          <div className="SignupContent__AddDegree SignupContent__Form__Head--Col">
            <p onClick={this.onAddDegree}>
              <span>+</span>Add additional degree
            </p>
            <p onClick={this.onDeleteDegree}>
              <span>-</span>Delete additional degree
            </p>
          </div>
        )}
        {/* {this.state.option >= 2 && (
          <div className="SignupContent__AddDegree">
            <p onClick={this.onDeleteDegree}>
              <span>-</span>Delete additional degree
            </p>
          </div>
        )} */}

        <div className="SignupContent__Form__Footer">
          <Button type="primary" htmlType="submit">
            Next Step
          </Button>
        </div>
      </Form>
    );
  }
}
export default Step2;
