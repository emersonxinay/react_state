/* eslint-disable react/prop-types */
import { Button } from 'react-bootstrap';
import {Badge} from 'react-bootstrap';

function Tag( {tag, colorTag} ) {
  return (
    <>
      <Badge bg={colorTag} as={Button}>
          {tag}
      </Badge>
    </>
  )
}

export default Tag;