import React, { useState, useEffect, useRef, useCallback } from "react"
import { Box, CheckBoxGroup, CheckBox, Text, Image } from "grommet"
import data from "../../data/covid-whatsapp-public-groups/data.json"
import dataBase64 from "../../data/covid-whatsapp-public-groups/base64.json"
import { clusters } from "../../data/covid-whatsapp-public-groups/cluster.json"
import { active } from "d3"

const VIZ_WIDTH = 800
const VIZ_HEIGHT = 600

const points = clusters.map(cluster => {
  let points = ""
  cluster.points.map(point => {
    let coordinate = `${point.x * VIZ_WIDTH},${point.y * VIZ_HEIGHT} `
    points += coordinate
  })
  return points
})

const images = data.images
const x = data.x
const y = data.y

const CovidWhatsappTSNEMap = () => {
  const [activeCategories, setActiveCategories] = useState([])
  const [active, setActive] = useState(undefined)
  const showPreview = useCallback((visibility, index, x, y) => {
    if (visibility) {
      setActive({ index, x, y })
    } else {
      setActive(undefined)
    }
  }, [])
  return (
    <Box gap={"medium"} overflow={"visible"} border={'all'} pad={'small'}>
      <Text size={"xsmall"}>
        {" "}
        Images have been blurred for preserving user privacy
      </Text>
      <Box id={"t-sne-map"} flex={true} overflow={"visible"}>
        <SVGViz activeCategories={activeCategories} showPreview={showPreview} />
      </Box>
      <ColoredCheckBoxGroup onChange={setActiveCategories} />
      {active !== undefined ? <ImagePreview active={active} /> : null}
    </Box>
  )
}

const SVGViz = ({ activeCategories, showPreview }) => {
  return (
    <svg
      viewBox={`0 0 800 600`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      transform-origin="center"
      style={{
        overflow: "visible",
        cursor: "crosshair",
      }}
      overflow={"visible"}
      onClick={() => showPreview(false)}
    >
      {points.map((point, ix) => {
        return activeCategories.includes(clusters[ix].label) ? (
          <polygon
            points={point}
            fill={clusters[ix].color ? clusters[ix].color : "red"}
            style={{
              filter: "blur(12px) opacity(600%)",
            }}
          />
        ) : null
      })}
      {data.images.map((imageId, ix) => (
        <image
          key={ix}
          x={x[ix] * 800}
          y={y[ix] * 600}
          height={10}
          width={10}
          href={`data:image/jpeg;base64,${dataBase64[imageId].base64}`}
          onMouseEnter={e => showPreview(true, ix, e.clientX, e.clientY)}
          imageRendering={"optimizeSpeed"}
        />
      ))}
    </svg>
  )
}

const ImagePreview = ({ active }) => {
  return (
    <Box
      width={"240px"}
      height={"240px"}
      background={"black"}
      style={{
        position: "fixed",
        left: active.x,
        top: active.y,
        visibility: active === undefined ? "hidden" : "visible",
      }}
    >
      <Image
        fit="contain"
        src={`/covid-whatsapp-public-groups/anonymized_images/${
          images[active.index]
        }`}
      />
    </Box>
  )
}

const ColoredCheckBoxGroup = ({ onChange }) => {
  const [socialMediaScreenshot, setSocialMediaScreenshot] = useState(false)
  const [otherScreenshot, setOtherScreenshot] = useState(false)
  const [news, setNews] = useState(false)
  const [medSup, setMedSup] = useState(false)
  const [papDoc, setPapDoc] = useState(false)
  const [tmpMsg, setTmpMsg] = useState(false)
  const [relImg, setRelImg] = useState(false)

  useEffect(() => {
    let selectionLabels = []
    if (socialMediaScreenshot)
      selectionLabels.push("Screenshots (Social Media)")
    if (otherScreenshot) selectionLabels.push("Screenshots (Other)")
    if (news) selectionLabels.push("TV, Newspaper, News Apps")
    if (medSup) selectionLabels.push("Medical Supplies")
    if (papDoc) selectionLabels.push("Paper Documents")
    if (tmpMsg) selectionLabels.push("Templatized Messages")
    if (relImg) selectionLabels.push("Religious Imagery")
    onChange(selectionLabels)
  }, [
    socialMediaScreenshot,
    otherScreenshot,
    news,
    medSup,
    papDoc,
    tmpMsg,
    relImg,
  ])

  return (
    <Box direction={"row"} gap={"small"} wrap={'true'}>
      <Box
        background={socialMediaScreenshot ? "#fbb4ae" : "#ffffff"}
        border={{ color: "#fbb4ae", size: "small" }}
        onClick={() => setSocialMediaScreenshot(!socialMediaScreenshot)}
        pad={"xsmall"}
        focusIndicator={"false"}
        hoverIndicator={"false"}
        width={'fit-content'}
        margin={{bottom:'xsmall'}}
      >
        <Text
          size={"small"}
          style={{ fontSize: "14px", lineHeight: "16px" }}
          as="div"
        >
          Screenshots (Social Media)
        </Text>
      </Box>
      <Box
        background={otherScreenshot ? "#b3cde3" : "#ffffff"}
        border={{ color: "#b3cde3", size: "small" }}
        onClick={() => setOtherScreenshot(!otherScreenshot)}
        pad={"xsmall"}
        focusIndicator={"false"}
        hoverIndicator={"false"}
        margin={{bottom:'xsmall'}}
      >
        <Text
          size={"small"}
          style={{ fontSize: "14px", lineHeight: "16px" }}
          as="div"
        >
          Screenshots (Other)
        </Text>
      </Box>
      <Box
        background={news ? "#ccebc5" : "#ffffff"}
        border={{ color: "#ccebc5", size: "small" }}
        onClick={() => setNews(!news)}
        pad={"xsmall"}
        focusIndicator={"false"}
        hoverIndicator={"false"}
        margin={{bottom:'xsmall'}}
      >
        <Text
          size={"small"}
          style={{ fontSize: "14px", lineHeight: "16px" }}
          as="div"
        >
          TV, Newspaper, News Apps
        </Text>
      </Box>
      <Box
        background={medSup ? "#decbe4" : "#ffffff"}
        border={{ color: "#decbe4", size: "small" }}
        onClick={() => setMedSup(!medSup)}
        pad={"xsmall"}
        focusIndicator={"false"}
        hoverIndicator={"false"}
        margin={{bottom:'xsmall'}}
      >
        <Text
          size={"small"}
          style={{ fontSize: "14px", lineHeight: "16px" }}
          as="div"
        >
          Medical Supplies
        </Text>
      </Box>
      <Box
        background={papDoc ? "#fed9a6" : "#ffffff"}
        border={{ color: "#fed9a6", size: "small" }}
        onClick={() => setPapDoc(!papDoc)}
        pad={"xsmall"}
        focusIndicator={"false"}
        hoverIndicator={"false"}
        margin={{bottom:'xsmall'}}
      >
        <Text
          size={"small"}
          style={{ fontSize: "14px", lineHeight: "16px" }}
          as="div"
        >
          Paper Documents
        </Text>
      </Box>
      <Box
        background={tmpMsg ? "#ffffcc" : "#ffffff"}
        border={{ color: "#ffffcc", size: "small" }}
        onClick={() => setTmpMsg(!tmpMsg)}
        pad={"xsmall"}
        focusIndicator={"false"}
        hoverIndicator={"false"}
        margin={{bottom:'xsmall'}}
      >
        <Text
          size={"small"}
          style={{ fontSize: "14px", lineHeight: "16px" }}
          as="div"
        >
          Templatized Messages
        </Text>
      </Box>
      <Box
        background={relImg ? "#e5d8bd" : "#ffffff"}
        border={{ color: "#e5d8bd", size: "small" }}
        onClick={() => setRelImg(!relImg)}
        pad={"xsmall"}
        focusIndicator={"false"}
        hoverIndicator={"false"}
        margin={{bottom:'xsmall'}}
      >
        <Text
          size={"small"}
          style={{ fontSize: "14px", lineHeight: "16px" }}
          as="div"
        >
          Religious Imagery
        </Text>
      </Box>
    </Box>
  )
}

export default CovidWhatsappTSNEMap
