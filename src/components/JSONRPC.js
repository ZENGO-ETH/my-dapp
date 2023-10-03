import React, { useReducer } from "react"
import { Editor, EditorState, GetSchema, EditorAction, makeReducer } from "react-dataflow-editor"

const kinds = {
	add: {
		name: "Addition",
		inputs: { a: null, b: null },
		outputs: { sum: null },
		backgroundColor: "lavender",
	  },
      	  div: {
		name: "Division",
		inputs: { dividend: null, divisor: null },
		outputs: { quotient: null, remainder: null },
		backgroundColor: "darksalmon",
	  },
        }

     const S = GetSchema<typeof kinds>
     interface MyEditorProps {
	initialValue?: EditorState<S>
     }
     const defaultInitialValue: EditorState<S> = {
	nodes: {},
	edges: {},
	focus: null,
     }

     export default function MyEditor(props: MyEditorProps){


        const reducer = makeReducer(kinds)
        const [state, dispatch] = useReducer(
        reducer,
	props.initialValue || defaultInitialValue
	)


       return (
         <div className="app">
          <div className="app-header">
           <Editor kinds={kinds} state={state} dispatch={dispatch} />
          </div>
         </div>
  );
}
