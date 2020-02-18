import React from "react";
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const UPLOAD = gql`
mutation($file: Upload!) {
  uploadCvFile(file: $file) {
    id
    filename
    mimetype
    encoding
    url
  }
}
`

const UploadA = ({ mutate }) => {
  const handleChange = ({
    target: {
      validity,
      files: [file]
    }
  }) =>
    validity.valid &&
    mutate({
      variables: { file },
      update(
        proxy,
        {
          data: { singleUpload }
        }
      ) {
        const data = proxy.readQuery({ query: UPLOAD })
        proxy.writeQuery({
          query: UPLOAD,
          data: {
            ...data,
            uploads: [...data.uploads, singleUpload]
          }
        })
      }
    })

  return <input type="file" required onChange={handleChange} />
}

export default graphql(UPLOAD)(UploadA)
