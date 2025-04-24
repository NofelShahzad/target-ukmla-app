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
}) => {


    return (
        <div style={{ display: 'flex', gap: '20px' }}>
      {/* Source List */}
      {console.log("questionDetails::",questionDetails)}
      <div
      className={`dragable-wrapper ${isSourceOptionsDivEmpty?'empty-source':''}`}
        style={{
          minHeight: '200px',
          width: '350px',
          padding: '10px',
          backgroundColor: isSourceOptionsDivEmpty ? '#f0f0f0' : '#fff',
          opacity: isSourceOptionsDivEmpty ? 0.6 : 1,
          border: '2px dashed #ccc',
          borderRadius: '8px',
          pointerEvents: isSourceOptionsDivEmpty ? 'none' : 'auto',
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
      {/* {console.log("questionDetails::",questionDetails)} */}
      
      <ReactSortable
        list={targetDroppedOptions}
        setList={setTargetDroppedOptions}
        group="shared"
        animation={200}
        onAdd={handleAddDropOption}
        sort={questionDetails?.answer === null} disabled={questionDetails?.answer !== null}
        className={`dragable-wrapper ${targetDroppedOptions.length===0?'empty-bg':''} ${questionDetails?.answer!==null && questionDetails?.answer.correct==='no'? 'incorrect':''}`}
      >
        {targetDroppedOptions?.map((item,index) => (
          <div key={item?.id} className={`item ${(questionDetails?.answer !== null && item?.rank===index)?'correct':''} ${(questionDetails?.answer !== null && item?.rank!==index)?'wrong':''}`}>
            <span className="">{index+1}.</span><Markup markup={item?.description}/>
            {/* <div dangerouslySetInnerHTML={{ __html: item.description }} /> */}
          </div>
        ))}
      </ReactSortable>
    </div>
    );
};

export default DragableOptions;
