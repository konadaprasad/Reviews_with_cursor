import {Component} from 'react'

import './index.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

const ReviewItems = props => {
  const {listItems} = props
  const {imgUrl, username, companyName, description} = listItems

  return (
    <div>
      <img src={imgUrl} alt={username} className="image" />
      <p className="para">{username}</p>
      <p className="description">{companyName}</p>
      <p className="description">{description}</p>
    </div>
  )
}

class ReviewsCarousel extends Component {
  state = {index: 0, length: reviewsList.length}

  leftButton = () => {
    const {index} = this.state
    if (index === 0) {
      this.setState({index: 0})
    } else {
      this.setState({index: index - 1})
    }
  }

  rightButton = () => {
    const {index, length} = this.state
    if (index === length - 1) {
      this.setState({index: length - 1})
    } else {
      this.setState({index: index + 1})
    }
  }

  render() {
    const {index} = this.state

    return (
      <div className="container">
        <h1 className="heading">Reviews</h1>
        <div className="inner-container">
          <button
            type="button"
            onClick={this.leftButton}
            className="left-button"
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <div className="review-container">
            <ReviewItems listItems={reviewsList[index]} />
          </div>
          <button
            type="button"
            onClick={this.rightButton}
            className="left-button"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
