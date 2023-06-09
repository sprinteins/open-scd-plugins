# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## Communication Explorer [Unreleased]

## Added
- clicking on the background of the diagram will deselect all elements
- multiple IED selection
- animated connection to see better the direction of messages
- add MMS messages

## Changed
- new diagram design

## Dedupe [Unreleased]

## Dedupe [0.0.11] - 2023-06-07

### Changed
- if no category filter is selected it behaves as if everything would be selected

### Fixed
- the category filter now works even if the user filters before file is processed

## Dedupe [0.0.10] - 2023-05-19

### Changed

- internal restructure of the plugin to allow easier layout changes
- new design and layout

## Dedupe [0.0.9] - 2023-05-15

## Fixed

- Enum Types' structure was not shown

## Dedupe [0.0.8] - 2023-05-15

## Fixed

- Logical Node Types' usages were not found
- Logical Node Types' parents name were not displayed

## Dedupe [0.0.7] - 2023-05-15

## Added

- Dedupe following types
  - Logical Node Type
  - Data Object Type
  - Data Attribute Type
  - Enum Type

## Communication Explorer [0.0.12] - 2023-04-27

### Fixed

- Rename Labels in Sidebar Panel

## Communication Explorer [0.0.11] - 2023-04-26

### Added

- Experiment: hide irrelevant stuff
- Experiment: search by IED name

## Communication Explorer [0.0.10] - 2023-04-26

### Added

- Added Sampled Value Messages to the Communication Explorer
- Filter by message type

### Fixed

- fixed flickering of the view in case of any change

## Communication Explorer [0.0.9] - 2023-04-21

### Fixed

- Missing IED definition crashed the plugin.
  It ignores the IED connection has a undefined IED.

## Communication Explorer [0.0.8] - 2023-04-20

### Added

- IEDs are selectable
- Selecting an IED will show only relevant IEDs and connections
- Filter for incoming and outgoing connections

### Fixed

- The SVG no grows with the diagram

### Network Explorer [0.0.9] - 2023-05-23

- pdf can be generated
- button for pdf download
