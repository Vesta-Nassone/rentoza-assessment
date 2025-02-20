import { useAppSelector, useAppDispatch } from "../store/hooks.ts";
import { increment, decrement } from "../store/slices/counterSlice.ts";

function TestRedux() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>Count: {count}</div>
      <button
        type="button"
        className="bg-green-500 text-white rounded-lg px-2 py-2 mr-4"
        onClick={() => dispatch(increment())}
      >
        +Increment
      </button>
      <button
        type="button"
        className="bg-red-500 text-white rounded-lg px-2 py-2"
        onClick={() => dispatch(decrement())}
      >
        -Decrement
      </button>
    </div>
  );
}

export default TestRedux;
