import React, {useState} from 'react';
import {Switch as ReactSwitch} from 'react-native';
import {Theme} from '../../../Theme'
type SwitchProps = {
    onToggle: (value:boolean)=>void
    initialStatus: boolean
}

export function Switch({onToggle, initialStatus}:SwitchProps): React.JSX.Element {
  const [isEnabled, setIsEnabled] = useState<boolean>(initialStatus);

  function toggleSwitch() {
    const currentValue = initialStatus
    setIsEnabled(!currentValue);
    onToggle(!currentValue)
  }
  
  return (
    <ReactSwitch
      trackColor={{false: Theme.colors.dark.foregroundTertiary, true: "#3E3E3E"}}
      thumbColor={isEnabled ? Theme.colors.dark.lightBlue : Theme.colors.dark.extraDarkBlue}
      ios_backgroundColor="#3E3E3E"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
}
