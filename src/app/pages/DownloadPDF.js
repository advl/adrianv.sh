import * as React from 'react'
import { useMemo, useCallback, useState, useEffect } from 'react'

import { Text, Box, useApp, useStdin, useInput, Newline } from 'ink'

import open from 'open'
import path from 'path'

import TextInput from 'ink-text-input'
import Spinner from 'ink-spinner'

import * as figures from 'figures'

import fs from 'fs'
import https from 'https'

import { 
  Page,
  ConfirmInput,
  ColorSelectInput,
  ColoredTitle,
  ColoredText,
  useSettings,
} from 'app/common'

import { 
  useHistory,
  useLocation
} from 'react-router'


//https://stackoverflow.com/questions/11944932/how-to-download-a-file-with-node-js-without-using-third-party-libraries
var download = function(url, dest, cb, errCb) {
  var file = fs.createWriteStream(dest)
  var request = https.get(url, function(response) {
    response.pipe(file)
    file.on('finish', function() {
      file.close(cb)  // close() is async, call cb after close completes.
    })
  }).on('error', function(err) { // Handle errors
    fs.unlink(dest) // Delete the file async. (But we don't check the result)
    if (cb) errCb(err.message)
  })
}

const DownloadPDF = (props) => {

  const [dirname, setDirname] = useState(process.cwd())
  const [confirmNewDirMode, setConfirmNewDirMode] = useState(false)
  const [confirmNewDirValue, setConfirmNewDirValue] = useState(false)
  const [downloadMode, setDownloadMode] = useState(false)
  const [downloadSuccess, setDownloadSuccess] = useState(false) 
  const [downloadError, setDownloadError] = useState(false) 

  const [error, setError] = useState(false)

  const history = useHistory()

  const location = useLocation()

  const { 
    color,
    remoteHost,
    setSettings
  } = useSettings()

  const items = [
    {
      label:`${figures.arrowLeft} d`,
      value:'/'
    }
  ]

  const submitDirname = value => {
    if (!fs.existsSync(value)){
      setConfirmNewDirMode(true)
    }
    else {
      setDownloadMode(true)
    }
  }


  const submitConfirmNewDir = useCallback(value => {
    if (value) {
      try {
        fs.mkdirSync(dirname, { recursive: true })
        setDownloadMode(true)
      } catch(e) {
        if(e.syscall === 'mkdir' && e.code === 'EACCES') {
          setError(`Permission error while trying to create directory '${dirname}'. You can avoid this error by running this program with higher permissions (if you're the 'chmod 777' kind of person) or by simply choosing another directory for the download.`)
        } else {
          setError(JSON.stringify(e))
        }
        setConfirmNewDirMode(false)
      }
    }
    else {
      setConfirmNewDirMode(false)
    }
  }, [dirname])

  const {
    localFilename,
    sourceURI,
    downloadFilename
  } = useMemo(() => {
    const localFilename = `adrian_v_resume_${location.state.format}.pdf`
    const sourceURI = path.join(remoteHost, localFilename)
    const downloadFilename = path.join(dirname, localFilename)
    return {
      localFilename,
      sourceURI,
      downloadFilename
    }
  }, [dirname])

  useEffect(() => {
    if (downloadMode) {
      download(
        sourceURI,
        downloadFilename,
        () => setDownloadSuccess(true),
        (e) => setDownloadError(e)
      )
    }

  }, [downloadMode])

  useInput((input, key) => {
    if (downloadMode && key.return) {
      history.push('/')
      // Exit program
    }
    if (downloadMode && input?.toLowerCase() === 'o') {
      open(`file://${downloadFilename}`)
    }

  })


  return (
    <Page >

      <Box
        width={90}
        justifyContent='center'
        key={ 'title' }
      >
        <ColoredTitle
          font='simple3d'
        >
          download
        </ColoredTitle>
      </Box>
      { !downloadMode ?
        !confirmNewDirMode ? 
          <Box
            width='90'
            paddingX={3}
          >
            <Text>
              { error && 
                <Text color='red'>
                  { error }
                  <Newline count={2}/>
                </Text>
              }
              <ColoredText bold>
            In which folder do you want to download the pdf resume ?
                {' '}
              </ColoredText>
              <TextInput
                value={dirname}
                onChange={setDirname}
                onSubmit={ submitDirname }
              />
            </Text>

          </Box> :
          <Box>
            <ColoredText bold>
                The directory 
              {' '}
              {dirname}
              {' '}
              
does not exist. Create it ? (Y/n)
              {' '}
            </ColoredText>
            <ConfirmInput
              defaultValue={ true }
              value={ confirmNewDirValue }
              onChange={ setConfirmNewDirValue }
              onSubmit={ submitConfirmNewDir }
            />
          </Box>

        :
        <>
          <Box
            alignItems="flex-start"
            paddingX={3}
            marginBottom={1}
            marginLeft={14}
            width={ 100 }
          >
            <ColoredText bold>
              {!( downloadSuccess || downloadError ) &&
                  'Download in progress :'
              }
              { downloadSuccess && 
                  'Download successful.'}
              { downloadError && 
                  'Error during download.'
              }
            </ColoredText>
          </Box>

          <Box
            alignItems="flex-start"
            paddingX={3}
            marginBottom={1}
            width={ 100 }
          >
            <Box
              marginRight={1}
              width={13}
            >
              <ColoredText>Format</ColoredText>
            </Box>
            <Box width={86}>
              <Text bold>
                { location.state?.format }
              </Text>
            </Box>
          </Box>

          <Box
            alignItems="flex-start"
            paddingX={3}
            marginBottom={1}
            width={ 100 }
          >
            <Box
              marginRight={1}
              width={13}
            >
              <ColoredText>Origin</ColoredText>
            </Box>
            <Text bold>
              { sourceURI }
            </Text>
          </Box>

          <Box
            alignItems="flex-start"
            paddingX={3}
            marginBottom={1}
            width={ 100 }
          >
            <Box
              marginRight={1}
              width={13}
            >
              <ColoredText>Destination</ColoredText>
            </Box>
            <Box width={86}>
              <Text bold>
                { downloadFilename }
              </Text>
            </Box>
          </Box>

          <Box
            alignItems="flex-start"
            paddingX={3}
            marginBottom={1}
            width={ 100 }
          >
            <Box
              marginRight={1}
              width={13}
            >
              <ColoredText>
                Status
              </ColoredText>
            </Box>
            <Box width='86'>
              {!( downloadSuccess || downloadError ) &&
                <Spinner type="dots" />
              }
              { downloadSuccess && 
                <Text color='green'>
                  { figures.tick }
                  {' Success !'}
                </Text>}
              { downloadError && 
                <Text color='red'>
                  { figures.cross }
                  {` Error :  ${downloadError}`}
                </Text>}

            </Box>
          </Box>

          { (downloadSuccess || downloadError) && 
          <Box
            alignItems="flex-start"
            paddingX={3}
            marginBottom={1}
            marginLeft={14}
            width={ 100 }
          >
            <ColoredText bold>
              Press ENTER to return to the main menu
              { downloadSuccess && ' or press O to open pdf in browser.' }
            </ColoredText>
          </Box>
          }

        </>
      }

    </Page>

  )
}

export default DownloadPDF
