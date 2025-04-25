// import { useEffect, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import './DragableOptions.css'
import { Markup } from 'react-render-markup';

const DragableOptions = ({
    questionDetails,
    alphabets, handleAddDropOption,
    isSourceOptionsDivEmpty,
    sourceOptions,
    // setSourceOptions,
    targetDroppedOptions,
    setTargetDroppedOptions,
    type,
    isRankingSubmitted, isRankingAnswerShow,
}) => {


    return (
      
        <div style={{ display: 'flex', gap: '20px' }}>
      {/* Source List */}
      <div
      className={`dragable-wrapper ${isSourceOptionsDivEmpty || (isRankingSubmitted && isRankingAnswerShow)?'empty-source':''}`}
        style={{
          minHeight: '200px',
          minwidth: '200px',
          width: '50%',
          padding: '10px',
          backgroundColor: isSourceOptionsDivEmpty || (isRankingSubmitted && isRankingAnswerShow) ? '#f0f0f0' : '#fff',
          opacity: isSourceOptionsDivEmpty || (isRankingSubmitted && isRankingAnswerShow) ? 0.6 : 1,
          border: '2px dashed #ccc',
          borderRadius: '8px',
          pointerEvents: isSourceOptionsDivEmpty || (isRankingSubmitted && isRankingAnswerShow) ? 'none' : 'auto',
        }}
      >
        <ReactSortable
          list={sourceOptions}
          setList={(currentList) => currentList}
          group={{ name: 'shared', pull: 'clone', put: false }}
          sort={false}
          clone={(item) => structuredClone(item)}
        >
          {sourceOptions?.map((item,index) => (
            <div key={item?.id} className="item" data-id={item?.id}>
              <span className="">{alphabets[index]}.</span><Markup markup={item?.description}/>
            </div>
          ))}
        </ReactSortable>

        {isSourceOptionsDivEmpty && (
          <div style={{ textAlign: 'center', color: '#999', marginTop: '50px' }}>
            No options left
          </div>
        )}
      </div>

      {/* Target List */}
      {/* {console.log("questionDetails?.answer::",questionDetails)} */}
      {/* {console.log("targetDroppedOptions:::",targetDroppedOptions)} */}
      <ReactSortable
        key={questionDetails?.answer ? 'submitted' : 'unsubmitted'}
        list={targetDroppedOptions}
        setList={setTargetDroppedOptions}
        group="shared"
        animation={200}
        onAdd={handleAddDropOption}
        sort={questionDetails?.answer === null && type!=="mock"} 
        disabled={!!questionDetails?.answer && type!=="mock"}
        className={`dragable-wrapper 
          ${targetDroppedOptions.length===0?'empty-bg':''} 
          ${questionDetails?.answer!==null && questionDetails?.answer.correct==='no' && type!=="mock"? 'incorrect':''}
          ${questionDetails?.answer!==null && questionDetails?.answer.correct==='yes' && type!=="mock"? 'correct':''}
          `}
      >
        {targetDroppedOptions?.map((item,index) => (
          <div key={item?.id} className={`item ${(questionDetails?.answer !== null && item?.rank===index+1 && type!=="mock")?'correct':''} ${(questionDetails?.answer !== null && item?.rank!==index+1 && type!=="mock")?'wrong':''}`}>
            <span className="">{index+1}.</span><Markup markup={item?.description}/>
            {/* <div dangerouslySetInnerHTML={{ __html: item.description }} /> */}
          </div>
        ))}
      </ReactSortable>
    </div>
      
    );
};

export default DragableOptions;

{/* <div className="" style={{ display: 'flex', gap: '20px' }}>
        <div className='w-50 mb-2 ps-2'><strong>Drag Options From here</strong></div>
        <div className='w-50 mb-2 ps-2'><strong>Drop Options here and arraneg them</strong></div>
      </div> */}