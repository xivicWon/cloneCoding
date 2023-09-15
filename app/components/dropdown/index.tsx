import React from 'react';
import {DropdownListItemProps, DropdownListitem} from './dropdown-list-item';
import {useSharedValue} from 'react-native-reanimated';

type DropdownProps = {
  header: DropdownListItemProps;
  options: DropdownListItemProps[];
};

const Dropdown = ({header, options}: DropdownProps) => {
  const dropdownItems = [header, ...options];
  const isExpanded = useSharedValue(false);
  return (
    <>
      {dropdownItems.map((item, index) => {
        return (
          <DropdownListitem
            key={index}
            index={index}
            isExpanded={isExpanded}
            {...item}
            dropdownItemsCount={dropdownItems.length}
          />
        );
      })}
    </>
  );
};

export {Dropdown};
