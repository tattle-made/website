import React from 'react'
import { Box, Text } from 'grommet'
import { Slack, GitHub, Twitter } from 'react-feather';
import { Link, ExternalLink } from './TattleLinks';


/**
* @author
* @function SmallFooter widget
**/

const SmallFooter = ({items}) => (
        <Box direction={'row'} wrap={true}>
            <Box direction={'row'} pad={'small'} gap={'small'} wrap={true}>
                {
                    items.primary.map((primaryItem) => {
                        return (
                            primaryItem.type==='internal' ? 
                                <Link 
                                    key={primaryItem.id}
                                    to={`/khoj/${primaryItem.target}`}
                                >
                                    <Text> {primaryItem.label} </Text>
                                </Link>
                            :
                                <ExternalLink 
                                    key={primaryItem.id}
                                    href={primaryItem.target} 
                                    target="_blank" 
                                >
                                    <Text> {primaryItem.label} </Text>
                                </ExternalLink>
                        )
                    })
                }
            </Box>

            <Box flex={'grow'}>
                
            </Box>

            <Box direction={'row'} pad={'small'} gap={'small'} align={'center'}>
                <ExternalLink 
                    href={'https://tarunima.typeform.com/to/BxZjfv'} target={'_blank'}>
                    <Slack size={16}/> 
                </ExternalLink>
                <ExternalLink 
                    href={'https://github.com/tattle-made'} target={'_blank'}>
                    <GitHub size={16}/>
                </ExternalLink>
                <ExternalLink 
                    href={'https://twitter.com/tattlemade'} target={'_blank'}>
                    <Twitter size={16}/>
                </ExternalLink>
            </Box>
        </Box>
)
export default SmallFooter