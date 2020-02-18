import React, { Component } from 'react';
import { Header, Footer } from '../components';
import YouTube from 'react-youtube';
import { _url } from '../config/utils';

class About extends Component {
  render() {
    const opts = {
      // height: '360',
      // width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return (
      <div>
        <Header page={this.props.page} aboutUs={true} />
        <div className="AboutUs">
          <div className="about__header" style={{ color: 'white', paddingTop: '150px', paddingBottom: '180px' }}>
            <h4 style={{ color: 'white' }}>FREELANCER ACQUISITION EXECUTIVE</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <img alt="location" src={_url('assets/icons/location.png')} />
            <span>San Francisco</span>
          </div>
          <div className="about_content">
            <div className="about__container">
              <h3>WHO ARE WE?</h3>
              <p>
                This role will play an important role in growing our international network of content creators. Working within a small team, you’ll execute on a range of campaigns
                that will attract a high calibre of freelance talent into our Network. You’ll then use your organisation skills to ensure all applicants are screened in an
                efficient yet professional manner. The right person for this role gets excited about running large-scale talent attraction campaigns, but also enjoys directly
                sourcing and approaching candidates for specific project briefs.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>

              <YouTube className="youtube-player" videoId="knW7-x7Y7RE" opts={opts} onReady={this._onReady} />

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
          <Footer page={this.props.page} />
        </div>
      </div>
    );
  }
}

export default About;
