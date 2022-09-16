import logo from './logo.svg';
import Closure from './closure';
import VarLetConst from './Var-Let-Const';
import RegVSarrowFunc from './regVSarrowFunc';
import Promised from './Promise';
import ThirdSmallNumber from './ThirdSmallNumber';
import Sort from './Sort';
import Sequence from './Sequence';
import Inheritance from './Inheritance';
import ThisKeyword from './thisKeyword';
import BindCallApply from './bindCallApply';
import Curry from './Curry';
import EventHandling from './EventHandling';
import IIFE from './IIFE';
import MissingNumber from './MissingNumber';
import PureandImpure from './PureandImpure';
import Parent from './Parent';
import './App.css';
import PureComponent from './PureComponent';
import Enhanced from './Enhanced';
import Portal from './Portal';
import InsertHero from './InsertHero';
import Memo1 from './Memo1';
import Context from './Context';
import RefComponent from './customhooks/usePrevious/Ref';
import Parentt from './LifeCycle/Mounting/Parent';
import ShouldUpdate from './LifeCycle/Updating/ShouldComponentUpdate';
import Snap from './LifeCycle/Updating/getSnapShotBeforeUpdate';
import WillMount from './LifeCycle/Unmounted/ComponentWillMount';
import ClassComponent from './ClassComponent';
import UseReducer from './useReducer';
import DocumentTitle from './customhooks/useDocumentTitle';
import UseCount from './customhooks/useCounter/UseCount';
import UseFrm from './customhooks/useForm/UseFrm';
import UseMemo2 from './useMemoVSuseCallback/useMemo/Parent';
import UseCallback1 from './useMemoVSuseCallback/useCallback/Parent';
import Trial from './Trial';
import Tab from './TAB';
import TabFunc from './TAB-Implemetation';
import DisplayMarks from './TAB-Implemetation/DisplayMarks';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from './TAB-Implemetation/NotFoundPage';

function App() {
  return (
    <UseCallback1/>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<TabFunc />} />
    //     <Route path="/marksPage/:marksId" element={<DisplayMarks />} />
    //     <Route path="/*" element={<NotFoundPage />} />
    //   </Routes>
    // </BrowserRouter>
  );
}


export default App;
