// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var React = require("react");
var Caml_array = require("rescript/lib/js/caml_array.js");
var Listboxkit = require("listboxkit/src/Listboxkit.bs.js");

var options = [
  "Red",
  "Green",
  "Blue"
];

function DropdownSelect(Props) {
  var match = Listboxkit.useDropdownListbox(options, false, undefined);
  var getOptionProps = match.getOptionProps;
  var selectedIndex = match.selectedIndex;
  var highlightedIndex = match.highlightedIndex;
  var match$1 = Curry._1(match.getContainerProps, undefined);
  var onKeyDown = match$1.onKeyDown;
  var dropdownProps = Curry._1(match.getDropdownProps, undefined);
  var selectedOption = selectedIndex === -1 ? "Select a color" : Caml_array.get(options, selectedIndex);
  return React.createElement("div", undefined, React.createElement("div", {
                  className: "dropdown-button",
                  role: dropdownProps.role,
                  tabIndex: dropdownProps.tabIndex,
                  onKeyDown: dropdownProps.onKeyDown,
                  onBlur: dropdownProps.onBlur,
                  onClick: dropdownProps.onClick
                }, selectedOption, React.createElement("div", {
                      className: "dropdown"
                    }, React.createElement("ul", {
                          className: "listbox",
                          hidden: !match.menuVisible,
                          role: match$1.role,
                          tabIndex: match$1.tabIndex,
                          onKeyDown: onKeyDown,
                          onFocus: match$1.onFocus
                        }, options.map(function (option, index) {
                              var match = Curry._1(getOptionProps, index);
                              var highlighted = highlightedIndex === index;
                              var className = [
                                  "listbox-option",
                                  highlighted ? "highlighted" : ""
                                ].join(" ");
                              return React.createElement("li", {
                                          key: option,
                                          "aria-selected": match["aria-selected"],
                                          className: className,
                                          role: match.role,
                                          onKeyDown: onKeyDown,
                                          onClick: match.onClick
                                        }, option);
                            })))));
}

var make = DropdownSelect;

exports.options = options;
exports.make = make;
/* react Not a pure module */
