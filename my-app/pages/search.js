import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useAtom } from 'jotai';
import { searchHistoryAtom } from '../store'; 

export default function AdvancedSearch() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom); 

  const submitForm = (data) => {
    let queryString = `searchBy=${data.searchBy}`;

    if (data.geoLocation) queryString += `&geoLocation=${data.geoLocation}`;
    if (data.medium) queryString += `&medium=${data.medium}`;
    queryString += `&isOnView=${data.isOnView || false}`;
    queryString += `&isHighlight=${data.isHighlight || false}`;
    queryString += `&q=${data.q}`;

    setSearchHistory(current => [...current, queryString]);

    router.push(`/artwork?${queryString}`);
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Search Query</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              isInvalid={!!errors.q}
              {...register('q', { required: true })}
            />
            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Form.Label>Search By</Form.Label>
          <Form.Select className="mb-3" defaultValue="title" {...register('searchBy', { required: true })}>
            <option value="title">Title</option>
            <option value="tags">Tags</option>
            <option value="artistOrCulture">Artist or Culture</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Label>Geo Location</Form.Label>
            <Form.Control type="text" placeholder="" {...register('geoLocation')} />
            <Form.Text className="text-muted">
              Case Sensitive String (e.g., &quot;Europe&quot;, &quot;France&quot;, &quot;Paris&quot;)
            </Form.Text>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Label>Medium</Form.Label>
            <Form.Control type="text" placeholder="" {...register('medium')} />
            <Form.Text className="text-muted">
              Case Sensitive String (e.g., &quot;Ceramics&quot;, &quot;Paintings&quot;)
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Check type="checkbox" label="Highlighted" {...register('isHighlight')} />
          <Form.Check type="checkbox" label="Currently on View" {...register('isOnView')} />
        </Col>
      </Row>
      <Row>
        <Col>
          <br />
          <Button variant="primary" type="submit">Submit</Button>
        </Col>
      </Row>
    </Form>
  );
}