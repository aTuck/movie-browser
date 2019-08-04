import React, { useState, useCallback } from 'react'
import { Transition } from "react-transition-group"
import styled from 'styled-components'
import SearchMovies from '../SearchMovies'
import Directory from '../Directory'
import { Test } from './Test.js'

const AnimatedTransitionDiv = ``

const Search = props => {
  const params = new URLSearchParams(props.location.search);
  const title = params.get("title");

  // this.props.searchMovieByTitle(params.get("title"));
  // console.log(params.get("title"))
  // console.log('Search location props:')
  // console.log(location)
  // const [animate, setAnimate] = useState(false)

  // const doAnimate = useCallback(() => {
  //   setAnimate(true)
  //   setTimeout(() => {
  //     setAnimate(false)
  //   }, 3000)
  // }, [])

  return (
    <>
      {/* <Transition in={animate} timeout={500}>
        {state => (<Test state={state}>TESTING</Test>)}
      </Transition> */}
        <SearchMovies title={title}/>
        <Directory title={title}/>
    </>
  )
}

export default Search
