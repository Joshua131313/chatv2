import React, { useEffect, useState } from 'react'
const urlMetadata = require('url-metadata')

export const Linkpreview = (props) => {
  const {link} = props
  const [linkInfo, setLinkInfo] = useState(link)

  

  useEffect(()=> {
    // ogs({url: link}, (error, results, response)=> {
    //   console.log(results)
    // })
    urlMetadata('https://gitlab.com/').then((metadata)=> {
      console.log(metadata)
    }, (error)=> {
      console.log(error) 
    })
  }, [])

  return (
    <div className="linkpreview">
      <div className="imagepreview">
        <img src="" alt=""/>
      </div>
      <div className="previewcontent">
        <h3></h3>
        <span>{}</span>
      </div>
    </div>
  )
}