import { Button, ButtonText } from '@gluestack-ui/themed';
import React from 'react';
import { LibrarySystemContext, UserContext, ThemeContext } from '../../context/initialContext';

// custom components and helper files
import {passUserToDiscovery} from '../../util/apiAuth';

export const MoreInfo = (props) => {
     const { theme, colorMode } = React.useContext(ThemeContext);
     const { user } = React.useContext(UserContext);
     const { library } = React.useContext(LibrarySystemContext);

     const backgroundColor = colorMode === 'light' ? theme['colors']['warmGray']['200'] : theme['colors']['coolGray']['900'];
     const textColor = colorMode === 'light' ? theme['colors']['gray']['800'] : theme['colors']['coolGray']['200'];

     return (
          <Button
               size="xs"
               minWidth="100%"
               maxWidth="100%"
               bgColor={backgroundColor}
               onPress={async () => {
                    await passUserToDiscovery(library.baseUrl, props.module, user.id, backgroundColor, textColor, props.recordId)
               }}>
               <ButtonText color={textColor}>{props.title}</ButtonText>
          </Button>
     );
};
