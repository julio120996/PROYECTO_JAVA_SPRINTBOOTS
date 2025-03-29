import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import "./SubtitlesDisplay.css";

const SubtitlesDisplay = ({ currentTime, subtitlesUrl }) => {
  const [subtitles, setSubtitles] = useState([]);
  const [currentSubtitle, setCurrentSubtitle] = useState('');
  const [subtitlesAvailable, setSubtitlesAvailable] = useState(true);

  useEffect(() => {
    if (!subtitlesUrl) {
      setSubtitles([]);
      setSubtitlesAvailable(false);
      return;
    }

    const fetchSubtitles = async () => {
      try {
        console.log('Fetching subtitles from:', subtitlesUrl);
        const response = await fetch(subtitlesUrl);
        const text = await response.text();
        
        if (!text || text.trim() === 'WEBVTT' || text.includes('NOTE No subtitles available')) {
          setSubtitlesAvailable(false);
          return;
        }
        
        console.log('Subtitles content:', text);
        parseVTT(text);
        setSubtitlesAvailable(true);
      } catch (error) {
        console.error('Error loading subtitles:', error);
        setSubtitlesAvailable(false);
      }
    };

    const parseVTT = (text) => {
      const lines = text.split('\n');
      const subs = [];
      let current = null;

      lines.forEach(line => {
        line = line.trim();
        
        if (!line || line.startsWith('WEBVTT') || line.startsWith('NOTE')) {
          return;
        }
        
        if (line.includes('-->')) {
          if (current) subs.push(current);
          const [startStr, endStr] = line.split('-->').map(s => s.trim());
          const start = parseTime(startStr);
          const end = parseTime(endStr);
          
          current = { 
            start, 
            end, 
            text: '' 
          };
        } else if (current) {
          current.text += (current.text ? '\n' : '') + line;
        }
      });

      if (current) subs.push(current);
      setSubtitles(subs);
    };

    const parseTime = (timeStr) => {
      const [mainPart, msPart] = timeStr.split('.');
      const parts = mainPart.split(':');
      let seconds = 0;
      
      if (parts.length === 3) {
        seconds = parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
      } else if (parts.length === 2) {
        seconds = parseInt(parts[0]) * 60 + parseInt(parts[1]);
      }
      
      if (msPart) {
        seconds += parseInt(msPart) / 1000;
      }
      
      return seconds;
    };

    fetchSubtitles();
  }, [subtitlesUrl]);

  useEffect(() => {
    if (!subtitles.length) {
      setCurrentSubtitle('');
      return;
    }

    const sub = subtitles.find(s => currentTime >= s.start && currentTime <= s.end);
    setCurrentSubtitle(sub?.text.trim() || '');
  }, [currentTime, subtitles]);

  if (!subtitlesUrl || !subtitlesAvailable) {
    return (
      <div className="subtitles-container">
        <Typography 
          variant="body1" 
          className="subtitles-unavailable"
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            textAlign: 'center',
            fontSize: '1rem',
            fontStyle: 'italic',
            padding: '0.5rem',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '4px',
            marginTop: '1rem'
          }}
        >
          Subtítulos no disponibles para esta canción
        </Typography>
      </div>
    );
  }

  if (!currentSubtitle) return null;

  return (
    <div className="subtitles-container">
      <Typography 
        variant="body1" 
        className="subtitles-text"
        sx={{
          color: 'white',
          textAlign: 'center',
          fontSize: '1.2rem',
          textShadow: '1px 1px 2px black',
          padding: '0.5rem',
          lineHeight: '1.5',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '4px',
          marginTop: '1rem'
        }}
      >
        {currentSubtitle.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </Typography>
    </div>
  );
};

export default SubtitlesDisplay;