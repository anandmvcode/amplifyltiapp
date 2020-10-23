/* eslint-env browser */
import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      stringEle: null
    }

    // this.submit = this.submit.bind(this)

    this.url = 'https://www.edu-apps.org/lti_public_resources/?tool_id=youtube'
    this.params = {
      lti_message_type: 'basic-lti-launch-request',
      lti_version: 'LTI-1p0',
      resource_link_id: 'resourceLinkId'
    }
  }
  // submit (e) {
  //   e.preventDefault()
  //   let formData = new FormData()
  //   Object.keys(this.params).forEach(key => {
  //     formData.append(key, this.params[key])
  //   })
  //   fetch(this.url, {
  //     method: 'POST',
  //     mode: 'cors',
  //     body: formData
  //     // target: 'my-iframe'
  //   }).then(res => {
  //     // console.log({ res })
  //     return res.text()
  //   }).then(body => {
  //     console.log({ body })
  //     this.setState({ stringEle: body })
  //   })
  // }
  render () {
    const { stringEle } = this.state
    console.log({ stringEle })
    return (
      <div className='cont'>
        <form target='my-iframe' method='POST' action={this.url}>
          {
            Object.keys(this.params).map((key, i) => {
              return <input name={key} type='hidden' value={this.params[key]} />
            })
          }
          <button>POST REACT LTI YT</button>
        </form>
        <iframe name='my-iframe' >{ stringEle } </iframe>
        {/* <Iframe url='about:blank' src={stringEle ? stringEle : undefined} /> */}
      </div>
    )
  }
}

export default App