import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { loadingAC } from './bll/loadingReducer'
import { AppStoreType } from './bll/store'

function HW10() {
  // useSelector,
  const isLoading = useSelector<AppStoreType, boolean>((state) => state.loading.isLoading)
  const dispatch = useDispatch()

  const setLoading = () => {
    dispatch(loadingAC(true))
    console.log('loading...')
    setTimeout(() => {
      dispatch(loadingAC(false))
      console.log('loading done')
    }, 2000)
  }
  return (
    <div>
      <hr />
      homeworks 10
      {/*should work (должно работать)*/}
      {isLoading ? (
        <div>
          <img src='https://media.tenor.com/7t8foti8FG8AAAAM/loading-screen-cat.gif' />
        </div>
      ) : (
        <div>
          <SuperButton onClick={setLoading}>set loading...</SuperButton>
        </div>
      )}
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr />
    </div>
  )
}

export default HW10
