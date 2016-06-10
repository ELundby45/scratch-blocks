/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 /**
  * @fileoverview Operator blocks for scratch-blocks.
  * @author tmickel@mit.edu (Tim Mickel)
  */

'use strict';

goog.provide('Blockly.Blocks.operators');

goog.require('Blockly.Blocks');

goog.require('Blockly.Colours');

Blockly.Blocks['operator_add'] = {
  /**
   * Block for adding two numbers.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1 + %2",
        "args0": [
          {
            "type": "input_value",
            "name": "NUM1",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "NUM2",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": Blockly.Colours.operators.primary,
        "colourSecondary": Blockly.Colours.operators.secondary,
        "colourTertiary": Blockly.Colours.operators.tertiary
      });
  }
};

Blockly.Blocks['operator_subtract'] = {
  /**
   * Block for subtracting two numbers.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1 - %2",
        "args0": [
          {
            "type": "input_value",
            "name": "NUM1",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "NUM2",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": Blockly.Colours.operators.primary,
        "colourSecondary": Blockly.Colours.operators.secondary,
        "colourTertiary": Blockly.Colours.operators.tertiary
      });
  }
};

Blockly.Blocks['operator_multiply'] = {
  /**
   * Block for multiplying two numbers.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1 * %2",
        "args0": [
          {
            "type": "input_value",
            "name": "NUM1",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "NUM2",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": Blockly.Colours.operators.primary,
        "colourSecondary": Blockly.Colours.operators.secondary,
        "colourTertiary": Blockly.Colours.operators.tertiary
      });
  }
};

Blockly.Blocks['operator_divide'] = {
  /**
   * Block for dividing two numbers.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1 / %2",
        "args0": [
          {
            "type": "input_value",
            "name": "NUM1",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "NUM2",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": Blockly.Colours.operators.primary,
        "colourSecondary": Blockly.Colours.operators.secondary,
        "colourTertiary": Blockly.Colours.operators.tertiary
      });
  }
};

Blockly.Blocks['operator_random'] = {
  /**
   * Block for picking a random number.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "pick random %1 to %2",
        "args0": [
          {
            "type": "input_value",
            "name": "FROM",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "TO",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": Blockly.Colours.operators.primary,
        "colourSecondary": Blockly.Colours.operators.secondary,
        "colourTertiary": Blockly.Colours.operators.tertiary
      });
  }
};

Blockly.Blocks['operator_lt'] = {
  /**
   * Block for less than comparator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 < %2",
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1"
        },
        {
          "type": "input_value",
          "name": "OPERAND2"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "colour": Blockly.Colours.operators.primary,
      "colourSecondary": Blockly.Colours.operators.secondary,
      "colourTertiary": Blockly.Colours.operators.tertiary
    });
  }
};

Blockly.Blocks['operator_equals'] = {
  /**
   * Block for equals comparator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 = %2",
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1"
        },
        {
          "type": "input_value",
          "name": "OPERAND2"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "colour": Blockly.Colours.operators.primary,
      "colourSecondary": Blockly.Colours.operators.secondary,
      "colourTertiary": Blockly.Colours.operators.tertiary
    });
  }
};

Blockly.Blocks['operator_gt'] = {
  /**
   * Block for greater than comparator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 > %2",
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1"
        },
        {
          "type": "input_value",
          "name": "OPERAND2"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "colour": Blockly.Colours.operators.primary,
      "colourSecondary": Blockly.Colours.operators.secondary,
      "colourTertiary": Blockly.Colours.operators.tertiary
    });
  }
};

Blockly.Blocks['operator_and'] = {
  /**
   * Block for "and" boolean comparator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 and %2",
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1",
          "check": "Boolean"
        },
        {
          "type": "input_value",
          "name": "OPERAND2",
          "check": "Boolean"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "colour": Blockly.Colours.operators.primary,
      "colourSecondary": Blockly.Colours.operators.secondary,
      "colourTertiary": Blockly.Colours.operators.tertiary
    });
  }
};

Blockly.Blocks['operator_or'] = {
  /**
   * Block for "or" boolean comparator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 or %2",
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND1",
          "check": "Boolean"
        },
        {
          "type": "input_value",
          "name": "OPERAND2",
          "check": "Boolean"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "colour": Blockly.Colours.operators.primary,
      "colourSecondary": Blockly.Colours.operators.secondary,
      "colourTertiary": Blockly.Colours.operators.tertiary
    });
  }
};

Blockly.Blocks['operator_not'] = {
  /**
   * Block for "not" unary boolean operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "not %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OPERAND",
          "check": "Boolean"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "colour": Blockly.Colours.operators.primary,
      "colourSecondary": Blockly.Colours.operators.secondary,
      "colourTertiary": Blockly.Colours.operators.tertiary
    });
  }
};

Blockly.Blocks['operator_join'] = {
  /**
   * Block for string join operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "join %1 %2",
      "args0": [
        {
          "type": "input_value",
          "name": "STRING1"
        },
        {
          "type": "input_value",
          "name": "STRING2"
        }
      ],
      "inputsInline": true,
      "output": "String",
      "colour": Blockly.Colours.operators.primary,
      "colourSecondary": Blockly.Colours.operators.secondary,
      "colourTertiary": Blockly.Colours.operators.tertiary
    });
  }
};

Blockly.Blocks['operator_letter_of'] = {
  /**
   * Block for "letter _ of _" operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "letter %1 of %2",
      "args0": [
        {
          "type": "input_value",
          "name": "LETTER",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "STRING"
        }
      ],
      "inputsInline": true,
      "output": "String",
      "colour": Blockly.Colours.operators.primary,
      "colourSecondary": Blockly.Colours.operators.secondary,
      "colourTertiary": Blockly.Colours.operators.tertiary
    });
  }
};

Blockly.Blocks['operator_length'] = {
  /**
   * Block for string length operator.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "length of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STRING"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": Blockly.Colours.operators.primary,
      "colourSecondary": Blockly.Colours.operators.secondary,
      "colourTertiary": Blockly.Colours.operators.tertiary
    });
  }
};

Blockly.Blocks['operator_mod'] = {
  /**
   * Block for mod two numbers.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1 mod %2",
        "args0": [
          {
            "type": "input_value",
            "name": "NUM1",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "NUM2",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": Blockly.Colours.operators.primary,
        "colourSecondary": Blockly.Colours.operators.secondary,
        "colourTertiary": Blockly.Colours.operators.tertiary
      });
  }
};

Blockly.Blocks['operator_round'] = {
  /**
   * Block for rounding a numbers.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "round %1",
        "args0": [
          {
            "type": "input_value",
            "name": "NUM",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": Blockly.Colours.operators.primary,
        "colourSecondary": Blockly.Colours.operators.secondary,
        "colourTertiary": Blockly.Colours.operators.tertiary
      });
  }
};

Blockly.Blocks['operator_mathop'] = {
  /**
   * Block for "advanced" math ops on a number.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "%1 of %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "OPERATOR",
            "options": [
              ['abs', 'ABS'],
              ['floor', 'FLOOR'],
              ['ceiling', 'CEILING'],
              ['sqrt', 'SQRT'],
              ['sin', 'SIN'],
              ['cos', 'COS'],
              ['tan', 'TAN'],
              ['asin', 'ASIN'],
              ['acos', 'ACOS'],
              ['atan', 'ATAN'],
              ['ln', 'LN'],
              ['log', 'LOG'],
              ['e ^', 'E'],
              ['10 ^', '10']
            ]
          },
          {
            "type": "input_value",
            "name": "NUM",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": Blockly.Colours.operators.primary,
        "colourSecondary": Blockly.Colours.operators.secondary,
        "colourTertiary": Blockly.Colours.operators.tertiary
      });
  }
};
