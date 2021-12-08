const {useState, useEffect, useContext} = require('react')
const {getNode,setNode} = require("./mycoil_nodes")

function getMycoilValue(mycoilValue) {
    return getNode(mycoilValue)
}

function useSetMycoilValue(mycoilValue) {
    return function (newValueOrUpdater) {
        const state = typeof newValueOrUpdater === "function" ? newValueOrUpdater(getNode(mycoilValue)) : newValueOrUpdater

        setNode({key: mycoilValue, state})
    }
}

function useMycoilState(mycoilValue) {
    return [getMycoilValue(mycoilValue), useSetMycoilValue(mycoilValue)]
}

module.exports = {useMycoilState,getMycoilValue,useSetMycoilValue}